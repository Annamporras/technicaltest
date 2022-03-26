const router = require('express').Router()
const Picture = require('../models/Picture.model')


// List of items

router.get('/getAllPictures', (req, res) => {

    Picture
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Create new item

router.post('/create', (req, res) => {

    const { title, image } = req.body

    Picture
        .create({ title, image })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Edit item

router.put('/edit/:picture_id', (req, res) => {
    const { picture_id } = req.params
    const { title, image } = req.body

    Picture
        .findByIdAndUpdate(picture_id, { title, image }, { new: true })
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