const products = require('../../integration/product');
var productList = require('../../middlewares/productService')

class ProductController{
    getProduct(req,res){
        var products=productList();
        products.then(product=>{
            res.status(200).send(product);
        })
    }
}


module.exports=new ProductController;