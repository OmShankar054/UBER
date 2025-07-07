 const mongoose = require('mongoose');

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/uber', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(' MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Optional: stop server if DB fails
  }
}

module.exports = connectToDb;
