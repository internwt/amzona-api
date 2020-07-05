import query from '../query/query'
class ProductController {
    async addProduct(req, res) {
        const { name, price, star, stock } = req.body
        const params = {
            TableName: 'Products',
            Item: {
                productId: '123456',
                price,
                name,
                star,
                stock
            }
        }
        const insertUserData = await query.put(params)
        res.send(insertUserData)
    }

    async updateProduct(req, res) {

    }

    async getProductList(req, res) {


    }

    async getProductById(req, res) {
        console.log(req.params.id)
        if(req.params.id){
             res.send({
                 name:"shoes",
                 star:1,
                 reviews:2
             })
        }else {
            throw Error(`id does not existss`)
        }
    }
}

module.exports = new ProductController()