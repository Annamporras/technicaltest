const router = require('express').Router()
const Picture = require('../models/Picture.model')


// List of items
router.get('/getAllPictures', (req, res) => {

    Picture
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Item Details
router.get('/getOnePicture/:id', (req, res) => {

    const { id } = req.params

    Picture
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

// Create new item
router.post('/create', (req, res) => {

    const { title, image, description } = req.body

    Picture
        .create({ title, image, description })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Edit item
router.put('/edit/:picture_id', (req, res) => {
    const { picture_id } = req.params
    const { title, image, description } = req.body

    Picture
        .findByIdAndUpdate(picture_id, { title, image, description }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Delete item
router.delete('/delete/:picture_id', (req, res) => {
    const { picture_id } = req.params

    Picture
        .findByIdAndDelete(picture_id)
        .then(res.json({ message: 'Producto eliminado' }))
        .catch(err => res.status(500).json(err))
})

module.exports = router