const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('../swagger.json')

const teamRouter = require('./routes/teams.routes')
const matchesRouter = require('./routes/matches.routes')
const classificationRoutes = require('./routes/classifications.routes')

const app = express()
app.use(express.json())

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get('/', (req, res) => res.send('Hello'))

app.use('/teams', teamRouter)
app.use('/matches', matchesRouter)
app.use('/classification', classificationRoutes)

const port = 1011

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})