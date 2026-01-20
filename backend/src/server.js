// console.log("Hey from the server!");
// const express = require("express"); -> commonjs type
import express from "express"; // module type import
import { ENV } from "./lib/env.js";

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({message: "Application is running"});
});

app.listen(ENV.PORT, () => {
    console.log("Server is running on port ", ENV.PORT);
})