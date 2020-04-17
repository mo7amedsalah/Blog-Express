const exprss = require('express')
const PostModel = require('../models/posts')
const router = exprss.Router()
// all posts
router.get('/', ( request, response, next ) => {
    PostModel.find({}, (err, posts) => {
        if (!err) return response.json(posts)
        next(err)
    })
})
// post by id
router.get('/:id', ( request, response, next ) => {
    const { id } = request.params
    PostModel.findById(id , (err, post) => {
        if (!err) return response.json(post)
        next(err)
    })
})
// create post
router.post('/', ( request, response, next ) => {
    const post = new PostModel (request.body)
    post.save((err, post) => {
        if (!err) return response.json(post)
        next(err)
    })
})
// update post
router.patch('/:id', ( request, response, next ) => {
    const { id } = request.params
    const post = request.body
    PostModel.findByIdAndUpdate(id, post, (err, post) => {
        if (!err) return response.json(post)
        next(err)
    })    
})
// delete post
router.delete('/:id', ( request, response, next ) => {
    const { id } = request.params
    PostModel.findByIdAndRemove(id, (err) => {
        if (!err) return response.send('the post deleted')
        next()
    })
})

module.exports = router