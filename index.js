const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')

const teamRouter = require('./src/routes/teams.routes')
const matchesRouter = require('./src/routes/matches.routes')
const classificationRoutes = require('./src/routes/classifications.routes')

const app = express()
app.use(express.json())

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get('/', (req, res) => res.send('Welcome to the World Cup API!!!'))

app.use('/teams', teamRouter)
app.use('/matches', matchesRouter)
app.use('/classification', classificationRoutes)

const PORT = process.env.PORT || 1011

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})