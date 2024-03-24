const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({message: "This is a test from server"});
});

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});