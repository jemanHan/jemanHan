const express = require("express");
const app = express();

let posts = [];

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { title, name, text } = req.body;
  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;

  posts = filteredPosts;

  if (isLengthChanged) {
    res.json("OK");
    return;
  }
  res.json("NOT CHANGED");
});

app.listen(3000, () => {
  console.log("welcome posts START!");
});

// 게시글 등록 (POST, 터미널에 입력)
// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "title=제목1&name=andy&text=안녕하세요~" http://localhost:3000/posts

// 게시글 삭제 (DELETE, 터미널에 입력)
// curl -X DELETE localhost:3000/posts/3
