import express from "express";
import { createServer, Server } from "http";
import controller from "./controller";
import bodyParser from "body-parser";
import database from "./config/database";
import cors from "cors";

const app = express();

database.sync({
  alter: true,
});

app.use(bodyParser.json()); //json으로 오는걸 객체로 처리해줘라
app.use(controller);
app.use(cors());

const server = createServer(app);
server.listen(process.env.PORT || 5000);
