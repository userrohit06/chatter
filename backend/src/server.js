import express from "express";
import "dotenv/config";

// routes
import authRoutes from "./routes/auth.route.js";

const app = express();

const PORT = process.env.PORT || 9001;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
