const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const userCtrl = {
    register: async (req, res)=>{
        try {
            const {name, email, password} = req.body;

            const user = await Users.findOne({email})
            if (user) return res.status(404).json({msg: "The Email AlReady Exists."})

            if(password.length < 6) return res.status(400).json({msg: "Password Is At Least 6 characters Long."}) 
            
            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new Users({
                name, email, password: passwordHash
            })
             // User Login And Register Info Save To MomgoDB

             await newUser.save()

            res.json({newUser})

            // res.json({password, passwordHash})

            res.json({msg: "Register Successfully Complete"})

        } catch (err) {
            return res.status(500).json({msg: err.message})

        }
    }
    
}

module.exports = userCtrl