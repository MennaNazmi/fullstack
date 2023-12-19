const path = require('path'); //import modules
const http= require('http');
const express= require('express');
const socketio=require('socket.io');//library

//execute express fn by calling empty arg
//create instance== runnning a copy of express frameworl
const app=express();//app instance has req and res
//calling createServer module from http module
const server = http.createServer(app);
/*https.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  }).listen(port);*/
const io=socketio(server);


//static folder
app.use(express.static(path.join(__dirname,'public')))

io.on('connection',socket=>{//trigger
    console.log('new ws connection');
    //socket.emit('message','welcome to chatCord')
})


const PORT = 3000 || process.env.PORT; //whatever the evn variable use PORT

server.listen(PORT,()=> console.log(`Server running on port ${PORT}`))