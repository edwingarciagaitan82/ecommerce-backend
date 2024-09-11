const express = require('express')
const app = express()
const puerto = 3000
const db = require('./config/db')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use("/api/categories",require('./routes/categoriasRt'))
app.use("/api/experiencias", require('./routes/experiencias'))
app.use("/api/usuarios", require('./routes/usuariosRoute'))

app.listen(puerto, ()=>{ console.log("Servidor Express Mongoose Activo, puerto:", puerto) })
db()