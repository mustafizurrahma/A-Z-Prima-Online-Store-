const Users = require('../models/userModel')

const authAdmin = async (req, res, next) => {
    try {
        //Get the user Information By Id
        const user = await Users.find({
            _id: req.user.id
        })
        if(user.role === 0) 
        return res.status(400).json({msg: "Your Admin Access Denied"})
        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}


module.exports = authAdmin