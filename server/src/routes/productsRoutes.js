const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

module.exports = () => {
    const {home, api, apiGetAll, addProduct, postAddProduct, editProduct, postEditProduct, deleteConfirmation, postDeleteConfirmation, productToDelete, postProductToDelete, productToEdit, postProductToEdit} = controller();

    router.route("/").get(home);
    router.route("/api").get(api);

    //Doubles as a front-end endpoint
    router.route("/admin/api/all").get(apiGetAll);
    router.route("/admin/api/add").get(addProduct).post(postAddProduct);

    //Backend exclusive endpoints
    router.route("/admin/edit/:id").get(editProduct).post(postEditProduct);
    router.route("/admin/delete/:id").get(deleteConfirmation);
    router.route("/admin/deleted").post(postDeleteConfirmation)

    //Front end api endpoints
    router.route("/admin/fe-delete/:id").get(productToDelete).post(postProductToDelete);
    router.route("/admin/fe-edit/:id").get(productToEdit).post(postProductToEdit);

    return router;
};