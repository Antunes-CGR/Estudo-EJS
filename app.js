const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express()

const port  = 5000

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
//config. Body-Parser
app.use(bodyParser.urlencoded())  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))

//connect port
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

//routes
app.get('/', (req, res) => {
  return res.render('pages/home')
})

app.post('/about', (req, res) => {
  res.send('Texto: ' + req.body.titulo + "Conteúdo: " + req.body.conteudo)})

app.get('/contact', (req, res) => {
  res.render('pages/contact')
})

app.post('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
})