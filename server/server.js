import express from 'express';
import route from './products.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use('/',express.static("public"));
app.use('/products',route);

app.listen(3000,function(){
    console.log("App is Started");
})
