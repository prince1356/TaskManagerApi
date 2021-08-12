const mongoose = require('mongoose')


mongoose.connect(process.env.JWT_MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify : false,
    useUnifiedTopology: true
})







// const task1 = new Task({
//     description: 'coding',
// })

// task1.save().then(() => {
//     console.log(task1)
// }).catch((error) => {
//     console.log('error', error)
// })










// const me = new User({
//     name: 'Harnoor',
//     age: 20,
//     email : 'harNoor201@gmail.com',
//     password : 'princeCr'
// })


// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })