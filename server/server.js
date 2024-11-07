import express from "express";
import client from "./elasticsearch/client.js";

const app = express();

const port = 3000;

app.listen(port, () => console.log("listening on port " + port));
