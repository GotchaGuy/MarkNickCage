const WebSocket = require('ws');
const server = new WebSocket.Server({port:3000});



server.on("connection", function(client) {
    console.log(client + " has connected.");
    client.send("welcome");


    client.on('message', function(info) {
        console.log(client + " " + info);
        
        server.clients.forEach( client => {
            client.send(info);
        });
    })

    client.on("client", function() {
        console.log("Client has disconnected.");

    })

})

