// Importando a express
const express = require("express")
// App de Express
const app = express()
// Indicamos que usaremos JSON
app.use(express.json())
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Esto es un ENDPOINT
// routes
// HTTP Methods: GET, POST, PUT, DELETE
app.get("/v1/explorers", (req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorers = [explorer1, explorer2]
    // HTTP CODE STATUS: 
    res.status(200).json(explorers)
})


app.get("/v1/explorers/:id", (req, res) => {
    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "Explorer1" }
    // HTTP CODE STATUS: 
    res.status(200).json(explorer1)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})