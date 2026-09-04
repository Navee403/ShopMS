import 'dotenv/config';
import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

if (!url) {
    throw new Error('MONGODB_URI is not set');
}

mongoose.connect(url)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

const productschema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

const product = mongoose.model('product', productschema);

export default product;