const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

module.exports = () => {
    const {home, api, apiGetAll, addProduct, postAddProduct, editProduct, postEditProduct, deleteConfirmation, postDeleteConfirmation} = controller();

    router.route("/").get(home);
    router.route("/api").get(api);
    // router.route("/api/seed").get(populateProducts);

    router.route("/admin/api/all").get(apiGetAll);

    router.route("/admin/api/add").get(addProduct).post(postAddProduct);

    router.route("/admin/edit/:id").get(editProduct).post(postEditProduct);

    router.route("/admin/delete/:id").get(deleteConfirmation);
    router.route("/admin/deleted").post(postDeleteConfirmation)

    // router.route("/admin/product/:id")

    return router;
};