import express from 'express';
import route from './products.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/',express.static("public"));
app.use('/products',route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', function(){
    console.log(`App is Started on port ${PORT}`);
});
