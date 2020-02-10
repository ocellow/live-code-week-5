if (process.env.NODE_ENV==="development"){
    require('dotenv').config()    
}

const express = require('express')
const app = express()
const port = 3000
const UserRoutes = require('./routes/UserRoutes')
const Error_Handling = require('./middlewares/error_handling')
const ComicRoutes = require('./routes/ComicRoutes')
const authentication = require('./middlewares/authentication')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use('/', UserRoutes)
app.use(authentication)
app.use('/', ComicRoutes)


app.use(Error_Handling)


app.listen(port, () => console.log(`Listening on port ${port}!`))