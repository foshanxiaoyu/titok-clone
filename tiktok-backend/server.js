const express = require("express");
const cors = require("cors");
const Data = require("./data.js");
const { findDoc, insertOneDoc } = require("./config/db");
// let tiktok = require("./config/tiktok");

// app config
const app = express();
const port = 9000;

// middlwares
app.use(cors());

//DB config

// api endpoints
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});
// list Document
app.get("/v1/posts", (req, res) => {
  findDoc();

  res.send(Data);
});

// Post
app.post("/v2/posts", (req, res) => {
  // POST request is to ADD DATA to the database
  // It will let us Add a video DOCUMENT to the videos COLLECTION
  let dbVideos = {
    url: "https://foshanxiaoyu.github.io/yer.mp4",
    channel: "FZX",
    description: "爱将投篮",
    song: "This is my fav song king ...",
    likes: 555,
    shares: 444,
    messages: 333,
    created: new Date(),
    updateTime: new Date(),
  };

  //   const dbVideos2 = {
  //     url: req.body.url,
  //     channel: req.body.channel,
  //     description: req.body.description,
  //     song: req.body.song,
  //     likes: req.body.likes888,
  //     shares: req.body.shares,
  //     messages: req.body.messages,
  //     created: new Date(),
  //     updateTime: new Date(),
  //   };

  console.log("2-dbVideos :", dbVideos);
  insertOneDoc(dbVideos);
  res.send("ok ");
});

// listen
app.listen(port, () => console.log(`Service Listening on ${port}`));
