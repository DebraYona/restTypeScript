import  {Response, Request, NextFunction } from 'express'
import Product , {IProduct} from '../model/Product'
//const  escapeRegex = require('')             



export const addProducts = async(req:Request, res:Response) =>{
    
    for (let i = 0 ; i ++; i<122){
        const product: IProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: i,
            image:req.body.image
        });    
        await product.save();
      //   const saveProduct = await product.save();
    }
   

    res.status(200).json({msg: "ok"});
}

export const products = async (req:Request, res:Response, next:NextFunction) => {
        let perPage =9;
        const page =( req.params.page || 1);

        Product.find({})
        .skip((perPage *Number(page))- perPage)
        .limit(perPage)
        .exec((err, products)=> {
            Product.count(( count:Number) =>{
                if(err) return next(err);
                res.status(200).json({
                    products:products ,
                    currentPage:page,
                    pages:Math.ceil(Number(count) / perPage)
    
                })
            })
            
        })
  /*   const resPerPage = 9; // results per page
    const page =( req.params.page || 1); // Page 
    try{
        if (req.query.search) {            // Declaring query based/search variables
               const searchQuery = req.query.search;
               //regex = new RegExp(escapeRegex(req.query.search), 'gi');
                // Find Demanded Products - Skipping page values, limit results       per page
                const foundProducts = await Product.find({})
                .skip((resPerPage * Number(page)) - resPerPage)
                .limit(resPerPage)
                .exec();
                const total = await Product.count();

               
                // Count how many products were found
                const numOfProducts = await Product.count({name: regex});
                // Renders The Page
                const shopProducts = {
                    products: foundProducts, 
                    currentPage: page, 
                    pages: Math.ceil(numOfProducts / resPerPage), 
                    searchVal: searchQuery, 
                    numOfResults: numOfProducts
                }

                res.status(200).json(shopProducts);
               
             
        }
    } catch (err){
        throw new Error (err);
    } */
    res.send("paginacion")
}




