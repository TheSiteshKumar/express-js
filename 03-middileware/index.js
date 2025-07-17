
import express from 'express';
import studentRoutes from './routes/student.js';
import adminRoutes from './routes/admin.js';

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route handlers
app.use('/student', studentRoutes);
app.use('/admin', adminRoutes);



app.listen(port, () => {
  console.log(`middileware app listening on http://localhost:${port}`)
})
