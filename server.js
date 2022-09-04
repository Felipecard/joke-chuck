const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/pages/index.html'))
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Try http://localhost:3000/')
    console.log('     ===>  CHUCK NORRIS KEEP WALKING EVER....')
})