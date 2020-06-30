import query from '../query/query'
class ProductController{
  async addProduct(req,res){
      const {productName,price,numberOfReviews,stockAvailbale} = req.body
      const params ={
          TableName: 'Products',
          Item :{
              productId:'123456',
              price,
              productName,
              numberOfReviews,
              stockAvailbale
          }
      }
      const insertUserData = query.put(params)
      res.send(insertUserData)
  }

  async updateProduct(req,res){

  }

  async getProductList(req,res){


  }

  async getProudctById(req,res){
      
  }
}

module.exports = new ProductController()