// ✅ الاتصال بقاعدة بيانات MongoDB
const { MongoClient, ObjectId } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://username:password@cluster0.mongodb.net/smartwifi";
let client;
let db;

// ✅ دالة الاتصال
async function connect() {
  if (db) return { db, client };
  if (!MONGO_URI) throw new Error("❌ MONGO_URI not set in environment variables");

  client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db("smartwifi"); // 👈 اسم قاعدة البيانات
  console.log("✅ Connected to MongoDB");
  return { db, client };
}

module.exports = { connect, ObjectId };
