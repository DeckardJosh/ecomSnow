const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

module.exports = () => {
    const {home, api, populateProducts} = controller();

    router.route("/").get(home);
    router.route("/api").get(api);
    router.route("/api/seed").get(populateProducts);

    return router;
};