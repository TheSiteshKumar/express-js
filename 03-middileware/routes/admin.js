import express from 'express';
import { authMiddleware, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Admin route (protected by auth + admin middleware)
router.get('/', authMiddleware, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to admin dashboard",
    user: req.user
  });
});

export default router;