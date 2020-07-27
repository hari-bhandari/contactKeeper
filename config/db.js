const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://hari:hari@mcdonalds.voov5.mongodb.net/contactKeeper?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
