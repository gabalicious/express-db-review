import express from "express";

import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

console.log("Serving from http://localhost:3000");
app.listen(3000);
// TODO 1. Add Mongo routes and models example
// TODO 2. Add Mongo using docker example
// TODO 3. Add cassandra example
// TODO 4. Add dyanodb(AWS) example
// TODO 5. Add RethinkDB example
