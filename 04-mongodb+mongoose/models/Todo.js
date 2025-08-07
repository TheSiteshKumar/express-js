import mongoose from 'mongoose';

// Define Todo Schema
const todoSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true
  },
  isDone: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;