import express from "express";
import {
  getDashboardStats,
  getLeads,
  getLeadById,
  updateLeadStatus,
  updateLeadNotes,
  deleteLead,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/dashboard", getDashboardStats);
router.get("/leads", getLeads);
router.get("/leads/:id", getLeadById);
router.patch("/leads/:id/status", updateLeadStatus);
router.patch("/leads/:id/notes", updateLeadNotes);
router.delete("/leads/:id", deleteLead);

export default router;