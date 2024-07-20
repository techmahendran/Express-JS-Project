import express from "express";
const router = express.Router();

const posts = [
  {
    id: 1,
    name: "Mahe",
  },
  {
    id: 2,
    name: "Venkat",
  },
  {
    id: 3,
    name: "Senthil",
  },
];

// Get All Posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get Single Posts
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      msg: `A post with the id of ${id} was not found`,
    });
  }
  res.json(post);
});

// Create new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    name: req.body.name,
  };

  if (!newPost.name) {
    res.status(400).json({ msg: "Please inclue a name" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Update Post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }

  post.name = req.body.name;
  res.status(200).json(posts);
});

// Delete Post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
