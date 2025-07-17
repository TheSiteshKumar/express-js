// Middleware to simulate authentication
export const authMiddleware = (req, res, next) => {
  console.log("Inside auth middleware");
  
  // Simulating user data (in real app, this would come from database/token)
  req.user = {
    id: 1,
    name: "Sitesh Kumar",
    role: "student" // Try changing to "admin" to test different routes
  };
  
  // Proceed to next middleware if user exists
  next();
};

// Middleware to check student role
export const isStudent = (req, res, next) => {
  console.log("Inside student middleware");
  
  if (req.user.role === "student") {
    next(); // Allow access to student route
  } else {
    res.status(403).json({
      success: false,
      message: "Access denied. This route is only for students."
    });
  }
};

// Middleware to check admin role
export const isAdmin = (req, res, next) => {
  console.log("Inside admin middleware");
  
  if (req.user.role === "admin") {
    next(); // Allow access to admin route
  } else {
    res.status(403).json({
      success: false,
      message: "Access denied. This route is only for admins."
    });
  }
};