import app from "./app.js";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

async function startServer() {
  await connectDB();

  app.listen(ENV.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${ENV.PORT}`);
  });
}

startServer();