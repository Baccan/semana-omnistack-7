const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

// @server
// Coments: Init http protocoll
const server = require('http').Server(app)
// @io
// Coments: Init io to send http requests in realtime
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://omni:omni@cluster0-cgyy7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// @io
// Coments: use io in all midlewares
app.use((req, res, next) => {
    req.io = io

    next()
})

// @cors
app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

const port = 3333

app.use(require('./routes'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))