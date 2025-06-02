const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

//Middlewares
app.use(cors())
app.use(express.json())

//Test route
app.get('/', (req, res) => {
    res.send('API running!')
})

//Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB conectado')
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
})
.catch(err => console.error('Erro ao conectar no MongoDB:', err))

const todoRoutes = require('./routes/todos')
app.use('/api/todos', todoRoutes)

