import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Import route modules
import homeRoute from "./routes/home.js";
import userRoute from "./routes/users.js";

const app = express();
const port = 4000;


// Use route modules
app.use("/", homeRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Routing app listening on http://localhost:${port}`);
});
