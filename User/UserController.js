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
        console.log(`parms `,params)
        const insertUserData = query.put(params)
         res.send(insertUserData)
     }
  
    async login(req,res){
        const {email,passowrd} = req.body
        // login table
    }

}

module.exports = new UserController()