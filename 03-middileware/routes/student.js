import express from 'express';
import { authMiddleware, isStudent } from '../middleware/auth.js';

const router = express.Router();

// Student route (protected by auth + student middleware)
router.get('/', authMiddleware, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to student portal",
    user: req.user
  });
});

export default router;