const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://admin:admin123@clustercomp3123.llert.mongodb.net/?retryWrites=true&w=majority&appName=Clustercomp3123";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
