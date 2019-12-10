import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 8080
app.use(bodyParser.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send("Server working!! Hello World.")
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})