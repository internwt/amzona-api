import query from '../query/query'

class UserController {
    async signUp(req, res) {
        const { name, email, password } = req.body
        const params = {
            TableName: 'Users',
            Item: {
                userId: '1235665455',
                name,
                email,
                password,
                role: 'member'
            }
        }
        const insertUserData =await  query.put(params)
        console.log(`parms `,insertUserData)
         res.send(insertUserData)
     }
  
    async login(req,res){
        const {email,passowrd} = req.body
        // login table
    }

}

module.exports = new UserController()