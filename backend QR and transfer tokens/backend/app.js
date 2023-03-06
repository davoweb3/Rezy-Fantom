const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors({
    'origin': '*',
    'methods': 'GET',
}));
const port = 3500
var products = require('./products.json')

app.get('/:code', (req, res) => {
    const code = req.params.code
    const result = products.filter(item => {
        let concate = `${item.Brand},${item.volume},${item.material},${item['empty weight']}`
        if( code.toLowerCase().includes(concate.toLowerCase())){
            return item
        }
    })
    res.send(result)
})

app.get('/', (req, res) => {
    res.send("result")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})