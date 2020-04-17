const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, maxlength: 20, minlength:3},
    author: {type: String, required: true, maxlength: 20, minlength:3},
    description: {type: String, required: true},
    dopublish: {type: Date, required: true}
})

const postModel = mongoose.model('Post', postSchema)

module.exports = postModel