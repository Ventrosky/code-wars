const dotenv = require('dotenv');
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const port = process.env.PORT || 8055;

app.get('/hello', (req, res) => {
    res.send("Hello");
});

app.post('/world', (req, res) => {
    console.log(req.body);
    res.json({hello: "World"});
});

app.listen(port, () => console.log(`App listening on port ${port}`));