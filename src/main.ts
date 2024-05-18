import express from "express";
import { Application } from "express";
import http, { Server } from "http"
import 'dotenv/config';

const app: Application = express();
const server: Server = http.createServer(app);
const PORT = process.env;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
server.listen(PORT, () => {
    console.log(`Server Run over: http://localhost:${PORT}`); 
})