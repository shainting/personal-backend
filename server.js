const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to learn backend with express!')
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})