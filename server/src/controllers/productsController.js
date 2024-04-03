const productModel = require("../models/products");

module.exports = () => {
    const home = (req, res) => {
        // res.json({message: "This is Home"});

        res.render("home");
    }

    const api = (req, res) => {
        (async()=>{
            const allProducts = await productModel.find({});
            res.json(allProducts);
          })();
    }

    // const populateProducts = (req, res) => {
    //     res.json({message: "Currently Disabled"});

    //     //DISABLED
    //     //to avoid putting extra data in db

    //     // const product = {
    //     //     name: "test",
    //     //     brand: "test",
    //     //     group: "test",
    //     //     price: 80,
    //     //     age: "test",
    //     //     size: ["23.5", "24.5", "25.5"],
    //     //     rating: 4,
    //     //     description: "Getting bigger and stronger, the kiddos need a boot that can keep up with their developing skills. Enter the Indy 3 and Luvbug 3: three-buckle boots that are comfortable and ready to rip, with added performance for long days of bashing bumps and exploring the mountain.",
    //     // };

    //     // console.log(product);

    //     // (async() => {
    //     //     const newProduct = new productModel(product);
    //     //     try{
    //     //         await newProduct.save();
    //     //     }catch(error){
    //     //         console.log(error);
    //     //     }
    //     // })();


    //     // res.json(product);
    // };

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

    return {
        home,
        api,
        apiGetAll,
        addProduct,
        postAddProduct,
        editProduct,
        postEditProduct,
        deleteConfirmation,
        postDeleteConfirmation
    }
}