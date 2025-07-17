import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// To get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home route
router.get("/", (req, res) => {
  res.sendFile("home.html", { root: path.join(__dirname, "..") });
});

export default router;