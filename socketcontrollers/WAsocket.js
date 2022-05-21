const WhatsappModel = require('../models/WhatsappModel')

exports.WAsocket = (connection, req) => {
    const waEvemtEmitter = WhatsappModel.watch()
    waEvemtEmitter.on('change', change =>{
        connection.socket.send(JSON.stringify(change));
        console.log(JSON.stringify(change))
    })
   
    connection.socket.on('message', message => {

    });
}