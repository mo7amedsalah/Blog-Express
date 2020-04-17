const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const port = process.env.PORT || 6000

mongoose.connect('mongodb://localhost:27017/blog-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) return console.log('connection on mongodb started');
    console.log(err);
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.use((err, request, response, next) => {
    response.status(500).send(err)
})

app.listen(port, (err) => {
    if (!err) return console.log(`started server on port ${port} `);
    console.log(err);
})

