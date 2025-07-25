const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use('/HTML', express.static(path.join(__dirname, 'html')));
app.use('/CSS', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'))
})

app.get('/html/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/about.html'))
})

app.get('/html/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/projects.html'))
})

app.get('/html/skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/skills.html'))
})

app.get('/html/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/contacts.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
