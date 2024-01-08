const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://akaashrv007:p12qzLJvWSrTBPWr@cluster0.n0mnee0.mongodb.net/mgmt"
  );
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
module.exports = connectDB;
