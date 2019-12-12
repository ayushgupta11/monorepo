import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { db } from '@monorepo/shared'

const app = express()
const port = process.env.PORT || 8080

console.log(db)
app.use(bodyParser.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send("Server working!! Hello World.")
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})