const exprss = require('express')
const UserModel = require('../models/users')
const router = exprss.Router()
// all users
router.get('/', ( request, response, next ) => {
    UserModel.find({}, (err, users) => {
        if (!err) return response.json(users)
        next(err)
    })
})
// user by id
router.get('/:id', ( request, response, next ) => {
    const { id } = request.params
    UserModel.findById(id , (err, user) => {
        if (!err) return response.json(user)
        next(err)
    })
})
// create user
router.post('/', ( request, response, next ) => {
    const user = new UserModel (request.body)
    user.save((err, user) => {
        if (!err) return response.json(user)
        next(err)
    })
})
// update user
router.patch('/:id', ( request, response, next ) => {
    const { id } = request.params
    const user = request.body
    console.log(user);
    UserModel.findByIdAndUpdate(id, user, (err, user) => {
        if (!err) return response.json(user)
        next(err)
    })    
})
// delete user
router.delete('/:id', ( request, response, next ) => {
    const { id } = request.params
    UserModel.findByIdAndRemove(id, (err) => {
        if (!err) return response.send(' the user deleted')
        next()
    })
})

module.exports = router