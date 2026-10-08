import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { ENV } from "./config/env.js";
import contactRoutes from "./routes/contact.routes.js";
import adminRoutes from "./routes/admin.routes.js"; // 1. Import Admin Routes
import analyticsRoutes from "./routes/analyticsRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security & Logging Middlewares
app.use(helmet());

// Update CORS to allow requests from both your public client and your admin client
const allowedOrigins = [ENV.CLIENT_URL, "http://localhost:5174"].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Or callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes); // 2. Mount Admin Routes here
app.use("/api/admin/analytics", analyticsRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

// Global Error Handler
app.use(errorHandler);

export default app;