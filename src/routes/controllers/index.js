let Producto

Producto = []


module.exports = {

    getProduct : (req,res)=> {
        res.json(Producto)
    },
    
    postProduct: (req,res)=> {
        req.body 
        Producto.push(req.body)
        console.log(Producto.length);
        res.json({message: "Todo bien"})
    },
    deleteProduct: (req,res)=>{
        Producto= []
        res.json(Producto)
    },
    putProduct: (req,res)=> {
        res.json({MessageEvent: 'Se Cambio'})
    }
}