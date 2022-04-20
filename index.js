const express = require("express")

const app = express()
const port = 3000
data = [{
    name: "zarnain",
    id: 123,
    class: 9
},
{
    name: "khinsa",
    id: 567,
    class: 10
},
{
    name: "chaman",
    id: 678,
    class: 56
},



]
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get("/profile", (req, res) => {
    res.send(data)
})

app.post("/profile", (req, res) => {
    res.send(req.body)
})

app.listen(port, () => {
    console.log("server is running");
})