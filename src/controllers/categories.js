const Category=require('../models/Category')

module.exports.CtrlCategory={
    index: async (req,res)=>{
        const categories=await Category.find({})
        res.json(categories)
    },
    store: async (req,res)=>{
        const newCategory=new Category({
            name: req.body.name,
            state: req.body.state
        })
        const category=await newCategory.save()
        res.json({
            status: true,
            msg: 'Category saved successfully!',
            category
        })
    },
    show: async (req,res)=>{
        const {categoryId}=req.params
        const category=await Category.findById(categoryId)
        res.json(category)
    },
    update: async (req,res)=>{
        const {categoryId}=req.params
        const newCategory=req.body
        const oldCategory=await Category.findByIdAndUpdate(categoryId,newCategory)
        res.json({
            status: true,
            msg: 'Category updated successfully!'
        })
    },
    patch: async (req,res)=>{
        const {categoryId}=req.params
        const newCategory=req.body
        const oldCategory=await Category.findByIdAndUpdate(categoryId,newCategory)
        res.json({
            status: true,
            msg: 'Category updated successfully!'
        })
    },
    destroy: async (req,res)=>{
        const {categoryId}=req.params
        await Category.findByIdAndRemove(categoryId)
        res.json({
            status: true,
            msg: 'Category deleted successfully!'
        })
    }
}