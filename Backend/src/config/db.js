const mongoose = require('mongoose');


async function connectDB() {
    try {
        console.log("Mongo URI loaded:", !!process.env.MONGO_URI);
        const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('Missing MONGO_URI or MONGODB_URI environment variable');
        }

        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connectDB;
