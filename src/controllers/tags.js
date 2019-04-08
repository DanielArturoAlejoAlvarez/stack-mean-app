const Tag=require('../models/Tag')

module.exports.CtrlTag={
    index: async (req,res)=>{
        const tags=await Tag.find({}).populate('posts','title')
        res.json(tags)
    },
    store: async (req,res)=>{
        const newTag=new Tag({
            name: req.body.name,
            state: req.body.state
        })
        const tag=await newTag.save()
        res.json({
            status: true,
            msg: 'Tag saved successfully!',
            tag
        })
    },
    show: async (req,res)=>{
        const {tagId}=req.params
        const tag=await Tag.findById(tagId)
        res.json(tag)
    },
    update: async (req,res)=>{
        const {tagId}=req.params
        const newTag=req.body
        const oldTag=await Tag.findByIdAndUpdate(tagId,newTag)
        res.json({
            status: true,
            msg: 'Tag updated successfully!'
        })
    },
    patch: async (req,res)=>{
        const {tagId}=req.params
        const newTag=req.body
        const oldTag=await tag.findByIdAndUpdate(tagId,newTag)
        res.json({
            status: true,
            msg: 'Tag updated successfully!'
        })
    },
    destroy: async (req,res)=>{
        const {tagId}=req.params
        await Tag.findByIdAndRemove(tagId)
        res.json({
            status: true,
            msg: 'Tag deleted successfully!'
        })
    }
}