const productModel = require("../models/products");

module.exports = () => {
    const home = (req, res) => {
        res.json({message: "This is Home"});
    }

    const api = (req, res) => {
        (async()=>{
            const allProducts = await productModel.find({});
            res.json(allProducts);
          })();
    }

    const populateProducts = (req, res) => {
        res.json({message: "Currently Disabled"});

        //DISABLED
        //to avoid putting extra data in db

        // const product = {
        //     name: "K2 LUVBUG 3 YOUTH",
        //     brand: "K2",
        //     group: "gear",
        //     price: 80,
        //     age: "kids",
        //     size: ["23.5", "24.5", "25.5"],
        //     rating: 4,
        //     description: "Getting bigger and stronger, the kiddos need a boot that can keep up with their developing skills. Enter the Indy 3 and Luvbug 3: three-buckle boots that are comfortable and ready to rip, with added performance for long days of bashing bumps and exploring the mountain.",
        // };

        // console.log(product);

        // (async() => {
        //     const newProduct = new productModel(product);
        //     try{
        //         await newProduct.save();
        //     }catch(error){
        //         console.log(error);
        //     }
        // })();


        // res.json(product);
    };

    return {
        home,
        api,
        populateProducts
    }
}