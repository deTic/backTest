import express from "express";

const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("hello world");
  console.log('get request')
});

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
