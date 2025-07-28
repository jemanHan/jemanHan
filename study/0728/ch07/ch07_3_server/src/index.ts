// import { createServer } from "http";
import express from "express";
import { insertTest } from "./test/insertTest";
import { findTest } from "./test/findTest";
import { connectAndUseDB } from "./mongodb";

const hostname = "localhost",
  port = 3000;

const app = express();

app.get("/", (req, res) => {
  findTest();
  res.json({ message: "Hello World" });
});

app.post("/", (req, res) => {
  insertTest();
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`connect http://${hostname}:${port}`);
});

// createServer(app).listen(port, hostname, () => {
//   console.log(`connect http://${hostname}:${port}`);
// });
