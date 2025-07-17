import express from "express";

const router = express.Router();

// POST /user - Create user
router.post("/", (req, res) => {
  res.json({
    name: "Sitesh Kumar",
    age: 25,
    email: "thesiteshkumar@gmail.com",
  });
});

// PUT /user/:id - Update user
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Update user with ID ${id}</h1>`);
});

// DELETE /user/:id - Delete user
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Delete user with ID ${id}</h1>`);
});

export default router;