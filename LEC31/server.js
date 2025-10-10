const{WebSocketServer} = require("ws");
const wss = new WebSocketServer({port:8080});

let rooms = new Map();
// {
//     "1234":[s1,s2,s3];
// }



wss.on("connection",function(socket){
    console.log("a new user connected");
    socket.on("message",function(message){
        //{"type:"join" || "chat","Payload":{"roomId":"value"}}
        let parsedMessage = JSON.parse(message);
        if(parsedMessage.type=="join"){
            let roomId = parsedMessage.payload.roomId;
            if(!rooms.get(roomId)){
                // rooms.set(roomId,new Set());
                return socket.send("roomID does not exist")
            }
            rooms.get(roomId).add(socket);
            socket.roomId =roomId;
            socket.send("you are added to room"+" "+roomId);
            console.log(rooms);
        }
        else if(parsedMessage.type=="chat"){
            let roomId = socket.roomId;
            let message = parsedMessage.payload.message;
            let allclients = rooms.get(roomId);
            allclients.forEach(element => {
                element.send(message);
            });
        }
        else if(parsedMessage.type=="create"){
            let roomId = Math.floor(Math.random()*10000000).toString();
            rooms.set(roomId,new Set());
            socket.send(roomId);
        }
    })


})
