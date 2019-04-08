const Post=require('../models/Post')
const Category=require('../models/Category')
const Tag=require('../models/Tag')


module.exports.CtrlPost={    
    index: async (req,res)=>{               
        const posts=await Post.find({}).populate('category','name').populate('tags','name').exec()          
        res.json(posts)    
    },
    store: async (req,res)=>{        
        const mycat=await Category.findOne({name:req.body.category})
        const mytag=await Tag.find({name: req.body.tags})
        
        const newPost=new Post({
            title: req.body.title,
            desc: req.body.desc,
            picture: req.body.picture,
            category: mycat,
            tags: mytag,
            state: req.body.state
        })
                
        const post=await newPost.save()
        res.json({
            status: true,
            msg: 'Post saved successfully!',
            post
        })
    },
    show: async (req,res)=>{
        const {postId}=req.params
        const post=await Post.findById(postId)
        res.json(post)
    },
    update: async (req,res)=>{        
        const {postId}=req.params 
        const mycat=await Category.findOne({name:req.body.category})
        const mytag=await Tag.find({name: req.body.tags})
        const newPost={
            title: req.body.title,
            desc: req.body.desc,
            picture: req.body.picture,
            category: mycat,
            tags: mytag,
            state: req.body.state
        }
        const oldPost=await Post.findByIdAndUpdate(postId,newPost)
        res.json({
            status: true,
            msg: 'Post updated successfully!'
        })
    },
    patch: async (req,res)=>{
        const {postId}=req.params 
        const mycat=await Category.findOne({name:req.body.category})
        const mytag=await Tag.find({name: req.body.tags})
        const newPost={
            title: req.body.title,
            desc: req.body.desc,
            picture: req.body.picture,
            category: mycat,
            tags: mytag,
            state: req.body.state
        }
        const oldPost=await Post.findByIdAndUpdate(postId,newPost)
        res.json({
            status: true,
            msg: 'Post updated successfully!'
        })
    },
    destroy: async (req,res)=>{
        const {postId}=req.params
        await Post.findByIdAndRemove(postId)
        res.json({
            status: true,
            msg: 'Post deleted successfully!'
        })
    },
    getByTag: async (req,res)=>{
        const {postId}=req.params
        const post=await Post.findById(postId).populate('tags')
        res.json(post)
    },
    postByTags: async (req,res)=>{
        const {postId}=req.params
        const newTag=new Tag(req.body)
        const post=await Post.findById(postId)
        newTag.posts=post
        await newTag.save()
        post.tags.push(newTag)
        await post.save()
        res.json(newTag)
    }   
}