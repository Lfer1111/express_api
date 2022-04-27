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
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = { id: 1, name: "Fernando" }
    res.status(200).json(explorer)
})

app.post("/v1/explorers1", (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros de un cliente
    res.status(201).json({message: "Created"})
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})