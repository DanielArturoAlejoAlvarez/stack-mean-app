const DB=require('../database')

const Schema=DB.Schema

const TagSchema=new Schema({
    name: {type: String, required: true},
    posts: {type: Schema.Types.ObjectId, ref: 'Post'},
    state: {type: Boolean, default: true},    
    dateRegister: {type: Date, default: Date.now()}
})

module.exports=DB.model('Tag', TagSchema)