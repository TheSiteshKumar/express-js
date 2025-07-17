 # Express.js Middleware Tutorial 🚀

Welcome to this beginner-friendly Express.js project! This project demonstrates how to use **middleware** in Express.js to handle authentication and authorization.

## 📚 What is Middleware?

Think of middleware as **security guards** at different checkpoints:
- When someone visits your website, they go through multiple "checkpoints"
- Each checkpoint (middleware) can either let them pass or stop them
- Middleware runs **between** the request and the final response

```
Request → Middleware 1 → Middleware 2 → Route Handler → Response
```

## 🏗️ Project Structure

```
middileware/
├── index.js              # Main server file
├── package.json           # Project configuration
├── middleware/
│   └── auth.js           # Authentication & authorization logic
└── routes/
    ├── student.js        # Student-specific routes
    └── admin.js          # Admin-specific routes
```

## 🔧 How to Run This Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm run dev
   ```

3. **Test the endpoints:**
   - Open your browser or use Postman
   - Visit: `http://localhost:4000/student`
   - Visit: `http://localhost:4000/admin`

## 🎯 What Each File Does

### 📄 `index.js` - The Main Server
This is where everything starts:
```javascript
import express from 'express';
import studentRoutes from './routes/student.js';
import adminRoutes from './routes/admin.js';

const app = express();
```

**What it does:**
- Creates an Express server
- Sets up basic middleware (JSON parsing)
- Connects route files to specific paths
- Starts the server on port 4000

### 🛡️ `middleware/auth.js` - Security Guards

This file contains three "security guards":

#### 1. `authMiddleware` - The Login Checker
```javascript
export const authMiddleware = (req, res, next) => {
  // Simulates checking if user is logged in
  req.user = {
    id: 1,
    name: "Sitesh Kumar",
    role: "student" // Change this to "admin" to test admin routes
  };
  next(); // Let them pass to next checkpoint
};
```

#### 2. `isStudent` - The Student Checker
```javascript
export const isStudent = (req, res, next) => {
  if (req.user.role === "student") {
    next(); // Student can pass
  } else {
    res.status(403).json({ message: "Only students allowed!" });
  }
};
```

#### 3. `isAdmin` - The Admin Checker
```javascript
export const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next(); // Admin can pass
  } else {
    res.status(403).json({ message: "Only admins allowed!" });
  }
};
```

### 🎓 `routes/student.js` - Student Area
```javascript
router.get('/', authMiddleware, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to student portal",
    user: req.user
  });
});
```

**The Journey:**
1. User visits `/student`
2. `authMiddleware` checks if they're logged in
3. `isStudent` checks if they're a student
4. If both pass, show student portal

### 👨‍💼 `routes/admin.js` - Admin Area
```javascript
router.get('/', authMiddleware, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to admin dashboard",
    user: req.user
  });
});
```

**The Journey:**
1. User visits `/admin`
2. `authMiddleware` checks if they're logged in
3. `isAdmin` checks if they're an admin
4. If both pass, show admin dashboard

## 🧪 Testing Different Scenarios

### Scenario 1: Student Access
1. In `middleware/auth.js`, make sure `role: "student"`
2. Visit `http://localhost:4000/student` ✅ **Works!**
3. Visit `http://localhost:4000/admin` ❌ **Blocked!**

### Scenario 2: Admin Access
1. In `middleware/auth.js`, change to `role: "admin"`
2. Restart the server
3. Visit `http://localhost:4000/admin` ✅ **Works!**
4. Visit `http://localhost:4000/student` ❌ **Blocked!**

## 🔄 Middleware Flow Diagram

```
┌─────────────────┐
│   User Request  │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│ authMiddleware  │ ← Checks if user is logged in
│ (Login Check)   │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│ Role Middleware │ ← Checks if user has correct role
│ (isStudent/     │
│  isAdmin)       │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│ Route Handler   │ ← Sends final response
│ (Student/Admin  │
│  Portal)        │
└─────────────────┘
```

## 🎓 Key Learning Points

### 1. **Middleware Order Matters!**
```javascript
// ✅ Correct order
router.get('/', authMiddleware, isStudent, routeHandler);

// ❌ Wrong order - role check before login check
router.get('/', isStudent, authMiddleware, routeHandler);
```

### 2. **The `next()` Function**
- `next()` = "Continue to next middleware"
- No `next()` = "Stop here, don't continue"

### 3. **Request Object (`req`)**
- Data gets passed between middleware through `req`
- `authMiddleware` adds `req.user`
- `isStudent` reads `req.user.role`

### 4. **Response Object (`res`)**
- Used to send responses back to user
- `res.json()` = Send JSON response
- `res.status(403)` = Set HTTP status code

## 🚀 Next Steps for Learning

1. **Add More Routes:**
   - Create a teacher route
   - Add a public route (no authentication needed)

2. **Add More Middleware:**
   - Logging middleware (track all requests)
   - Rate limiting (prevent spam)

3. **Real Authentication:**
   - Replace simulated user with JWT tokens
   - Add login/logout endpoints

4. **Database Integration:**
   - Store users in a database
   - Check roles from database

## 🐛 Common Issues & Solutions

### Issue: "Cannot GET /student"
**Solution:** Make sure the server is running (`npm run dev`)

### Issue: "Access denied" for student
**Solution:** Check the `role` in `authMiddleware` - it should be `"student"`

### Issue: Server won't start
**Solution:** Make sure you have Node.js installed and run `npm install`

## 📖 Useful Resources

- [Express.js Official Docs](https://expressjs.com/)
- [Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

**Happy Learning! 🎉**

Remember: The best way to learn is by experimenting. Try changing the code, break things, and fix them again!