
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
	useTempFiles: true
}))


//Router
app.use('/user', require('./routes/userRouter'))

// Connect MongoDB
const URL = process.env.MONGODB_URL

mongoose.connect(URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connect To MongoDB')
})

app.get('/', (req, res) =>{
    res.json({Message: 'Connect To My Custom E-Commerce Website Server'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Connect To My Custom E-Commerce Website Server in Running Port', PORT);
})

