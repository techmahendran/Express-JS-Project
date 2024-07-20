import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/posts", posts);

// static folder
// app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server running on port ${port}`));
