const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router()
const upload = multer(uploadConfig)

// @GET - /posts
// Coments: List posts
routes.get('/posts', upload.single('image'), PostController.index)

// @POST - /posts
// Coments: Add new posts
routes.post('/posts', upload.single('image'), PostController.store)

// @POST - /posts/:id/like
// Coments: Add a post like
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes