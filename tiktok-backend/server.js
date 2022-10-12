const express = require("express");
const cors = require("cors");
const Data = require("./data.js");
const { findAllDoc, insertOneDoc } = require("./config/db");
// const tiktok = require("./config/tiktok");

// app config
const app = express();
const port = 9000;

// middlwares
app.use(cors());
// server middlwares 不然服务器看不懂，req.body会出错
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB config

// api endpoints
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

// list Document
app.get("/v2/posts", (req, res) => {
  findAllDoc(req, res);
});

// Post
app.post("/v2/posts", (req, res) => {
  // POST request is to ADD DATA to the database
  // It will let us Add a video DOCUMENT to the videos COLLECTION
  const dbVideos = {
    url: req.body.url,
    channel: req.body.channel,
    description: req.body.description,
    song: req.body.song,
    likes: req.body.likes,
    shares: req.body.shares,
    messages: req.body.messages,
    created: new Date(),
    updateTime: new Date(),
  };

  console.log("12-dbVideos :", dbVideos);
  insertOneDoc(req, res, dbVideos);
});

// listen
app.listen(port, () => console.log(`Service Listening on ${port}`));
