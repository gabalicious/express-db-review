import express from "express";
import prismaPostRouter from "./routes/prismaPostRoutes.js";
import prismaUserRouter from "./routes/prismaUserRoutes.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.use("/", prismaPostRouter);
app.use("/", prismaUserRouter);
console.log("Serving from http://localhost:3000");
app.listen(3000);
// TODO 1. Add other ORM examples
// TODO 2. Try using PostgreSQL & MYSQL
//
