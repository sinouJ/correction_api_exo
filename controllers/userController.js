const UserModel = require('../models/User')
const fetch = require('node-fetch')

module.exports = {
    saveUsers: async (req, res) => {
        const request =  await fetch(`https://jsonplaceholder.typicode.com/users/`)
        const response = await request.json()

        response.map( async (user) => {
            const User = new UserModel({
                userId: user.id,
                username: user.username,
                email: user.email,
                address: {
                    street: user.address.street,
                    suite: user.address.suite,
                    city: user.address.city
                },
                phone: user.phone,
                company: {
                    name: user.company.name,
                    catchPhrase: user.company.catchPhrase,
                    bs: user.company.bs
                }
            })

            await User.save()
        })
    },
    getUser: (req, res) => {
        UserModel.findOne({userId: req.params.userId}, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!user) {res.status(404).json({"message": "User not found"})}
                res.status(200).json({
                    user
                })
            }
        })
    },
    updateUser: (req, res) => {
        const {username, email, phone} = req.body
        
        // Le deuxième paramètre de la méthode findOneAndUpdate est le nom des propriétés à modifier. 
        // Dans la requête il n'est pas nécessaire de mettre toutes les propriétés à modifier.
        // Les propriétés renseignées dans la requête seront remplacées par les valeurs de la requête.
        UserModel.findOneAndUpdate({userId: req.params.userId}, {username, email, phone}, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!user) {res.status(404).json({"message": "User not found"})}
                res.status(200).json({
                    "message": "success"
                })
            }
        })
    },
    deleteUser: (req, res) => {
        UserModel.findOneAndDelete({userId: req.params.userId}, (err, user) => {
            if (!user) {
                return res.status(404).json({message: "user not found"})
            }
            res.json(user)
        })
    },
}