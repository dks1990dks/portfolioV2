import Contact from "../models/Contact.js";

export async function createLead(data, meta) {
  return await Contact.create({
    ...data,
    metadata: meta,
  });
}

export async function getAllLeads(filters = {}) {
  const query = {};
  if (filters.status) query.status = filters.status;
  return await Contact.find(query).sort({ createdAt: -1 });
}

export async function updateLeadStatus(id, status, noteText) {
  const updatePayload = { status };

  const lead = await Contact.findById(id);
  if (!lead) throw new Error("Lead not found");

  if (noteText) {
    lead.notes.push({ text: noteText });
  }

  lead.status = status;
  return await lead.save();
}