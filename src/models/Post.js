var DB = require('../database');

const Schema=DB.Schema

const PostSchema=new Schema({
    title: {type: String, required: true},
    desc: String,
    picture: String,
    //category: {type: String, enum: ["languages","packages","frameworks","markups"]},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    //category: String,
    tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
    state: Boolean,
    dateRegister: {type: Date, default: Date.now()}
})

module.exports=DB.model('Post',PostSchema)