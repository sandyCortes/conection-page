const express = require('express')
const app = express()
var cors = require('cors');

// Settings
app.set('port', process.env.PORT || 3001)
app.use(cors());
// Middlewares
app.use(express.json())

// Routes
app.use(require('./app/routes/librarys'))

// Starting the server

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
})