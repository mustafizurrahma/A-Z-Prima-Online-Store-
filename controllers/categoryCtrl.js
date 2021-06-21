const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async(req, res) =>{
        try {
            //if you have user role = 1 ----> admin 
            //only admin can create category, delete and update category 
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "The Category is already Exists"})
            const newCategory = new Category({name})
            await newCategory.save()
            res.json({msg: "Create Category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    
}

module.exports = categoryCtrl