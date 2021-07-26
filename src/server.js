const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

//chamando o ejs
server.set('view engine', 'ejs')

server.use(express.static("public"))
//path é o caminho do projeto no meu computador
//join é juntar o caminho do meu projeto com o dirname(ex:src/views)
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))


