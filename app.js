const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express()

const port  = 5000

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded())  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

//routes

app.get('/', (req, res) => {
  return res.render('pages/home')
})

app.get('/about', (req, res) => {
  var users = [{
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: 'http://placebear.com/300/300'
  }, {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: 'http://placebear.com/400/300'
  }, {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: 'http://placebear.com/500/300'
  }]

  res.render('pages/about', {
      usuarios: users
  })
})

app.get('/contact', (req, res) => {
  res.render('pages/contact')
})

app.post('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
})