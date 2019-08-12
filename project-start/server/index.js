const dotenv = require('dotenv');
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './middleware/logger';
import db from './db/index';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const port = process.env.PORT || 8055;

app.use(logger);

app.get('/hello', (req, res) => {
    res.send("Ciao");
});

app.listen(port, () => console.log(`App listening on port ${port}`));