import {
  createLead,
  getAllLeads,
  updateLeadStatus,
} from "../services/contact.service.js";
import {
  sendAdminNotification,
  sendAutoReply,
} from "../services/email.service.js";
import { getGeoMetadata } from "../services/geo.service.js";

export async function submitContact(req, res, next) {
  try {
    const ipAddress =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      req.ip ||
      "";

    const geoData = await getGeoMetadata(ipAddress);

    const meta = {
      ipAddress,
      userAgent: req.headers["user-agent"] || "Unknown",
      referrer: req.headers["referer"] || req.headers["origin"] || "Direct",
      country: geoData.country,
      city: geoData.city,
    };

    // Extract core lead fields along with custom B2B qualification fields
    const {
      fullName,
      email,
      company,
      phone,
      country,
      projectType,
      budget,
      timeline,
      description,
      industry = "Other",
      companySize = "1–10",
      preferredCommunication = "Email",
      source = "Website",
      priority = "Medium",
    } = req.body;

    const leadData = {
      fullName,
      email,
      company,
      phone,
      country,
      projectType,
      budget,
      timeline,
      description,
      industry,
      companySize,
      preferredCommunication,
      source,
      priority,
    };

    // 1. Save lead to MongoDB
    const lead = await createLead(leadData, meta);

    // 2. Dispatch emails gracefully (non-blocking)
    Promise.allSettled([
      sendAdminNotification(lead),
      sendAutoReply(lead),
    ]).then((results) => {
      results.forEach((res, idx) => {
        if (res.status === "rejected") {
          console.error(
            `Email dispatch #${idx + 1} failed:`,
            res.reason?.message || res.reason
          );
        }
      });
    });

    // 3. Return success response to user immediately
    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      data: {
        referenceId: `DC-LEAD-${lead._id.toString().slice(-6).toUpperCase()}`,
        status: lead.status,
      },
    });
  } catch (error) {
    next(error);
  }
}

// Admin / Lead Management Controllers
export async function getLeads(req, res, next) {
  try {
    const leads = await getAllLeads(req.query);
    res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (error) {
    next(error);
  }
}

export async function updateStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    const updatedLead = await updateLeadStatus(id, status, note);
    res.status(200).json({
      success: true,
      message: `Lead status updated to '${status}'`,
      data: updatedLead,
    });
  } catch (error) {
    next(error);
  }
}