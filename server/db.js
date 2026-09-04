import mongoose from 'mongoose';
const url='mongodb://localhost/shopdb';
mongoose.connect(url);

const db=mongoose.Connection; //this is reference ,using db we call methods like insertone,insertMany

//creating a schema [creating fields for shop]
const productschema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
});

//creating a model
const product=mongoose.model('product',productschema);
export default product;