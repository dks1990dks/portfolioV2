import { Router } from "express";
import { submitContact, getLeads, updateStatus } from "../controllers/contact.controller.js";
import { validate } from "../middleware/validate.js";
import { contactValidator } from "../validators/contact.validator.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

const router = Router();

// Public submission route
router.post("/", contactLimiter, validate(contactValidator), submitContact);

// Admin CRM endpoints
router.get("/", getLeads);
router.patch("/:id/status", updateStatus);

export default router;