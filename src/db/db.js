const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb://learning:WhQT2xLJVJRB069O@ac-huxgxod-shard-00-00.2902pjm.mongodb.net:27017,ac-huxgxod-shard-00-01.2902pjm.mongodb.net:27017,ac-huxgxod-shard-00-02.2902pjm.mongodb.net:27017/myDatabase?authSource=admin&replicaSet=atlas-9vo2eu-shard-0&tls=true&retryWrites=true&w=majority&appName=Cluster0",
    );

    console.log("✅ Connected to DB");
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
