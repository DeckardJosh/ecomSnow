const productModel = require("../models/products");

module.exports = () => {
    const home = (req, res) => {
        res.render("home");
    }

    const api = (req, res) => {
        (async()=>{
            const allProducts = await productModel.find({});
            res.json(allProducts);
          })();
    }

    const apiGetAll = (req, res) => {
        (async()=>{
            const allProducts = await productModel.find({});
            // console.log(allProducts.length)
            res.render("adminAll", {allProducts})
        })();
    };

    const addProduct = (req, res) => {
        res.render("addProduct")
    }

    const postAddProduct = (req, res) => {
        // const nameInput = req.body.nameInput;
        const {nameInput, brandInput, groupInput, priceInput, ageInput, ratingInput, sizeInput, descriptionInput} = req.body;
        // console.log("name: " + nameInput + "brand: " + brandInput + "group: " + groupInput + "price: " + priceInput + "age: " + ageInput + "rating: " + ratingInput + "size: " + sizeInput + "description: " + descriptionInput);

        let convertedGroup = groupInput.toLowerCase();
        let convertedAge = ageInput.toLowerCase();
        let convertedPrice = parseInt(priceInput);
        let convertedRating = parseInt(ratingInput);
        let convertedSizes = sizeInput.split(' ').join('').split(',');

        const product = {
            name: nameInput,
            brand: brandInput,
            group: convertedGroup,
            price: convertedPrice,
            age: convertedAge,
            size: convertedSizes,
            rating: convertedRating,
            description: descriptionInput,
        };

        (async()=>{
            const productToAdd = new productModel(product)
            try {
                await productToAdd.save();
            } catch (err) {
                console.log(err);
            }

            res.redirect("/admin/api/all");
        })();

    }

    const editProduct = (req, res) => {
        let id = req.params.id;

        (async()=>{
            const product = await productModel.findById(id);

            res.render("editProduct", {product});
        })();
    }

    const postEditProduct = (req, res) => {
        let id = req.params.id;
        const {nameInput, brandInput, groupInput, priceInput, ageInput, ratingInput, sizeInput, descriptionInput} = req.body;
        
        let convertedGroup = groupInput.toLowerCase();
        let convertedAge = ageInput.toLowerCase();
        let convertedPrice = parseInt(priceInput);
        let convertedRating = parseInt(ratingInput);
        let convertedSizes = sizeInput.split(' ').join('').split(',');

        const product = {
            name: nameInput,
            brand: brandInput,
            group: convertedGroup,
            price: convertedPrice,
            age: convertedAge,
            size: convertedSizes,
            rating: convertedRating,
            description: descriptionInput,
        };
        
        (async()=>{
            try {
                const updatedProduct = await productModel.findByIdAndUpdate(id, product, {new: true});

                await updatedProduct.save();
            } catch (err) {
                console.log(err);
            }
            res.redirect("/admin/api/all");
        })();
    }

    const deleteConfirmation = (req, res) => {
        let id = req.params.id;

        (async()=>{
            const product = await productModel.findById(id);

            res.render("deleteConfirmation", {product});
        })();
    }

    const postDeleteConfirmation = (req, res) => {
        let id = req.body.id;

        (async()=>{
            await productModel.deleteOne({_id: id});

            res.redirect("/admin/api/all");
        })();
    }

    const productToDelete = (req, res) => {
        let id = req.params.id;

        (async()=>{
            const product = await productModel.findById(id);

            res.json(product);
        })();
    }

    const postProductToDelete = (req, res) => {
        let id = req.params.id;
        (async()=>{
            await productModel.deleteOne({_id: id});

            res.json({message: "Product Deleted"});
        })();
    }

    const productToEdit = (req, res) => {
        let id = req.params.id;

        (async()=>{
            const product = await productModel.findById(id);

            res.json(product);
        })();
    }

    const postProductToEdit = (req, res) => {
        let id = req.params.id;
        const {name, brand, group, price, age, rating, size, description} = req.body;
        
        let convertedGroup = group.toLowerCase();
        let convertedAge = age.toLowerCase();
        let convertedPrice = parseInt(price);
        let convertedRating = parseInt(rating);
        let convertedSizes = size;
        if (typeof size === 'string') {
            convertedSizes = size.split(' ').join('').split(',');
        }

        const product = {
            name: name,
            brand: brand,
            group: convertedGroup,
            price: convertedPrice,
            age: convertedAge,
            size: convertedSizes,
            rating: convertedRating,
            description: description,
        };
        
        (async()=>{
            try {
                const updatedProduct = await productModel.findByIdAndUpdate(id, product, {new: true});

                await updatedProduct.save();
            } catch (err) {
                console.log(err);
            }
            res.json({message: "Product Updated"});
        })();
    }

    return {
        home,
        api,
        apiGetAll,
        addProduct,
        postAddProduct,
        editProduct,
        postEditProduct,
        deleteConfirmation,
        postDeleteConfirmation,
        productToDelete,
        postProductToDelete,
        productToEdit,
        postProductToEdit
    }
}