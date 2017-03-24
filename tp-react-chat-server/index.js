const server = require('http').createServer();
const io = require('socket.io')(server);
const uuidv4 = require("uuid/v4");

let allUsers = []


io.on('connection', function (socket) {

    socket.on('msg',function(msgtxt){
        let messageObj = {
            id : uuidv4(),
            message : msgtxt,
            user : socket.user,
            date : getNiceTimeStamp(new Date())
        }
        io.sockets.emit('broadcast',messageObj)
    })

    socket.on('adduser', function (user) {
        let userObj = {
            username : user,
            id : uuidv4()
        }
        socket.user = userObj
        socket.emit('useradded',socket.user);
        allUsers.push(userObj)
        socket.emit('listusers',allUsers)
    });

    socket.on('disconnect', function () {
        console.log('Deconnexion')
        var i = allUsers.indexOf(socket);
        allUsers.splice(i, 1);
        socket.emit('leave',allUsers[i])
        socket.emit('listusers',allUsers)
    });

});

function getNiceTimeStamp(date){
    let hour = date.getHours().toString();
    if (hour.length < 2){hour = "0" + hour}

    let min = date.getMinutes().toString();
    if (min.length < 2){min = "0" + min}

    return hour + ":" + min
}


server.listen(4000);