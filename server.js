import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";
import checklistRoutes from "./routes/checklistRoutes.js";

const app = express();

connectDB(); // now MONGO_URI will be read inside the function

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://checkbox-front-git-main-prodipta-chakrabortys-projects.vercel.app/"
  ],
  credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/checklist", checklistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
