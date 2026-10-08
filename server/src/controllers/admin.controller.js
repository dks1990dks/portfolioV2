import  Contact  from "../models/Contact.js";

// GET /api/admin/dashboard
export async function getDashboardStats(req, res) {
  try {
    const totalLeads = await Contact.countDocuments();
    const stats = await Contact.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    const counts = {
      totalLeads,
      new: 0,
      contacted: 0,
      meetingScheduled: 0,
      proposalSent: 0,
      won: 0,
      lost: 0,
    };

    stats.forEach((s) => {
      if (s._id === "New") counts.new = s.count;
      if (s._id === "Contacted") counts.contacted = s.count;
      if (s._id === "Meeting Scheduled") counts.meetingScheduled = s.count;
      if (s._id === "Proposal Sent") counts.proposalSent = s.count;
      if (s._id === "Won") counts.won = s.count;
      if (s._id === "Lost") counts.lost = s.count;
    });

    res.json({ success: true, ...counts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// GET /api/admin/leads
export async function getLeads(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;
    const search = req.query.search;

    const query = {};

    if (status && status !== "All") {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { projectType: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const [leads, total] = await Promise.all([
      Contact.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Contact.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: leads,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// GET /api/admin/leads/:id
export async function getLeadById(req, res) {
  try {
    const lead = await Contact.findById(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: "Lead not found" });
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// PATCH /api/admin/leads/:id/status
export async function updateLeadStatus(req, res) {
  try {
    const { status } = req.body;
    const lead = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// PATCH /api/admin/leads/:id/notes
export async function updateLeadNotes(req, res) {
  try {
    const { notes, followUpDate } = req.body;
    const lead = await Contact.findByIdAndUpdate(
      req.params.id,
      { notes, followUpDate },
      { new: true }
    );
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// DELETE /api/admin/leads/:id
export async function deleteLead(req, res) {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Lead removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}