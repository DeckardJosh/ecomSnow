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
        const product = {
            name: "K2 MINDBENDER 105 BOA®",
            brand: "K2",
            group: "gear",
            price: 750,
            age: "womens",
            size: ["24.5", "25.5", "26.5"],
            rating: 4,
            description: "An all new flex for the 24' season, The Mindbender 105 W BOA® are the ultimate high-level freeride boots for any female skier. Strapped with all-new BOA® technology, these boots wrap better, with more micro adjustability — creating performance and responsiveness like never before. Outfitted with classic Mindbender construction, a Powerlite Shell, FasftFit Instep, and a Powerful Spyne, the 105 W BOA® delivers an uncompromising downhill experience.",
        };

        console.log(product);

        (async() => {
            const newProduct = new productModel(product);
            try{
                await newProduct.save();
            }catch(error){
                console.log(error);
            }
        })();

        // res.json({message: "data populated"});
        res.json(product);
    };

    return {
        home,
        api,
        populateProducts
    }
}