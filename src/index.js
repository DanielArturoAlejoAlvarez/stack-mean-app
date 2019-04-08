const express=require('express')



const app=express()

const path=require('path')

const morgan=require('morgan')
const cors=require('cors')

const config=require('./config')



app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({origin: config.urlBase}))

/*app.get('/', (req,res)=>{
    res.send('STACK MEAN!')
})*/

require('./routes')(app)

app.use(express.static(path.join(__dirname,'public')))


app.listen(config.port, ()=>{
    console.log(`Server run in port: ${config.port}`)
})