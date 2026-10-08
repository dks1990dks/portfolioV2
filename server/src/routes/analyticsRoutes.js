import express from "express";
import * as analyticsController from "../controllers/analyticsController.js"; // Note: .js extension is required in ES modules

const router = express.Router();

// Add authentication middleware if required (e.g., authMiddleware)
router.get("/summary", analyticsController.getSummary);
router.get("/monthly", analyticsController.getMonthlyTrends);
router.get("/countries", analyticsController.getCountryDistribution);
router.get("/industries", analyticsController.getIndustryDistribution);
router.get("/pipeline", analyticsController.getPipelineStats);
router.get("/activity", analyticsController.getRecentActivity);

export default router;