const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('server is up on ' + port );
})























/*

const User = require('./models/user')
const Task = require('./models/tasks')

const main = async () => {
    // const task = await Task.findById('610b58f7a8eb6230440a5f63')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('610b57d5d1e33825ac7620fe')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()



* /
/*
    without middleware : new request -> run route handler

    with middleware : new request -> do something -> run route handler
*/