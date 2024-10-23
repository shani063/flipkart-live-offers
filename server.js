import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import Connection  from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.gau6ebb.mongodb.net/ecommerce?retryWrites=true&w=majority`;


Connection(URL).catch(console.dir);

app.get('/', (req, res)=>{
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, ()=> console.log(`Server is running successfully on Port ${PORT}`));

// DefaultData();




