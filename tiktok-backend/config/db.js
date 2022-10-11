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
console.log("DB connect success.");
const DB_NAME = "MERN";
const coll = "tiktokVideos";

const findDoc = async function () {
  try {
    const result = await client
      .db("MERN")
      .collection("tiktokVideos")
      .find({})
      .toArray();
    console.log(result);
    result.forEach((err, doc) => {
      if (err) throw err;
      if (doc) console.log(doc);
    });
  } catch (e) {
    console.error(e);
  }
};

const insertOneDoc = async function (videoDoc) {
  try {
    const result = await client
      .db("MERN")
      .collection("tiktokVideos")
      .insertOne(videoDoc);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

module.exports.findDoc = findDoc;
module.exports.insertOneDoc = insertOneDoc;
