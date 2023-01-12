const ws = require('ws')

//ws:localhost:8000
const server = new ws.Server({port: 8003})

const init = () => {
    bindEvent()
}

function bindEvent() {
    server.on('open', handleOpen)
    server.on('close', handleClose)
    server.on('error', handleerror)
    server.on('connection', handleconnection)
}

function handleOpen() {
    console.log('websocketopen');
}
function handleClose() {
    console.log('websocketclose');

}
function handleerror() {
    console.log('websocketerror');

}
function handleconnection(ws) {
    console.log('websocketconnected', ws);
    ws.on('message', handlemessage)
}
function handlemessage(msg, isBinary) {
    server.clients.forEach( function (c) {
        c.send(msg, {binary : isBinary})
    })
}

init()

