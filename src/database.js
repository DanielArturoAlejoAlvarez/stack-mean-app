const mongoose=require('mongoose')

const config=require('./config')

mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(db=>console.log('DB is connect!'))
.catch(err=>console.error(err))

module.exports=mongoose