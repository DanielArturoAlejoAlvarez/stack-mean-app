const DB=require('../database')

const Schema=DB.Schema

const CategorySchema=new Schema({
    name: {type: String, required: true},
    state: {type: Boolean, default: true},    
    dateRegister: {type: Date, default: Date.now()}
})

module.exports=DB.model('Category', CategorySchema)