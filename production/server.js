const { application } = require("express");
const express = require("express");
const path = require("path");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT, HOST, () => console.log("Server running..."));
