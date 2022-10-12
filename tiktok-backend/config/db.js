const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();
// 定义数据库的连接
const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 连接数据库
client.connect();
// const DB_NAME = "MERN";
// const coll = "tiktokVideos";
console.log("DB connect success.");

const findAllDoc = async (req, res) => {
  try {
    const result = await client
      .db("MERN")
      .collection("tiktokVideos")
      .find()
      .toArray();
    res.status(201).send(result);
  } catch (e) {
    console.error(e);
  }
};

const insertOneDoc = async function (req, res, videoDoc) {
  try {
    const result = await client
      .db("MERN")
      .collection("tiktokVideos")
      .insertOne(videoDoc);
    console.log(result);
    res.send(result);
  } catch (e) {
    console.error(e);
  }
};

module.exports.findAllDoc = findAllDoc;
module.exports.insertOneDoc = insertOneDoc;
