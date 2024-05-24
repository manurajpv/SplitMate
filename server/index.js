var express = require('express');

var usersRouter = require('./routes/userRouter');

const app = express()
app.use(express.json())

app.use('/api/users', usersRouter)


//To detect and log invalid api hits 
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path'
      })
})

const port = process.env.PORT || 3001
app.listen(port, (err) => {
    console.log(`Server started in PORT | ${port}`)
})