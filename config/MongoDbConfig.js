const mongoose = require('mongoose')

exports.initMongo = () => {
    mongoose.connect(process.env.MONGODB_ADDRESS, {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection

    db.on('error',(err) => {
        console.log(err)
    })
    
    db.once('open', ()=>{
        console.log('DB Connection Established!')
    }) 
}
