// console.log("Hey from the server!");
// const express = require("express"); -> commonjs type
import express from "express"; // module type import
import { ENV } from "./lib/env.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
    res.status(200).json({message: "Application is running"});
});

app.get("/books", (req, res) => {
    res.status(200).json({message: "Books are coming soon"});
});

// make application ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(ENV.PORT, () => {
    console.log("Server is running on port ", ENV.PORT);
})