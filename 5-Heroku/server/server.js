const express = require('express')
const storageRouter = require('./routes/storage')
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const IDinCookie = require('./middleware/IDinCookie')
dotenv.config({ path: '.env' })

require('./db/connect')


const app = express()
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json());
app.use(cookieParser())
app.use(IDinCookie)

app.use('/todos', todosRouter)

app.listen(process.env.SERVER_PORT)