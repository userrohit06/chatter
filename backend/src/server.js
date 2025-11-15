import express from "express";
import "dotenv/config";
import path from "path";

// routes
import authRoutes from "./routes/auth.route.js";

const app = express();
const _dirname = path.resolve();

const PORT = process.env.PORT || 9001;

app.use("/api/auth", authRoutes);

// make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(_dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
