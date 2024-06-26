const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require('dotenv').config();
const mongoPassword = process.env.MONGO_PASS;
// console.log(process.env);

const PORT = process.env.PORT || 3000;
const app = express();

const router = require("./src/routes/productsRoutes")();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

//CSS
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//EJS
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Connection to Mongo DB
mongoose.connect(`mongodb+srv://deckardj:${mongoPassword}@ecomsnow.h4ryr55.mongodb.net/products`);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo Connection Error"));
db.once("open", () => {
    debug(`MongoDB Connected ${chalk.green("Successfully")}`);
});

//Routes:
app.use("/", router);

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});