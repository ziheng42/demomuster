((doc, storage, location, WebSocket) => {

    const clist = doc.querySelector('#list')
    const cmessage = doc.querySelector('#message')
    const csendbtn = doc.querySelector('#send')
    const ws = new WebSocket('ws://localhost:8003')
    let username = ''
    const init = () => {
        bindEvent()
    }

    function bindEvent() {
        csendbtn.addEventListener('click', handlesendbtnClick, false)
        ws.addEventListener('open', handleOpen, false)
        ws.addEventListener('close', handleClose, false)
        ws.addEventListener('error', handleError, false)
        ws.addEventListener('message', handlemessage, false)
    }
    function handlesendbtnClick() {
        console.log('sendmessage');
        const message = cmessage.value
        if (!message.trim().length) return
      
        ws.send(JSON.stringify({
            user: username,
            dataTime: new Date().getTime(),
            message
        }))
    }
    function handleOpen() {
        console.log('websocketopen');
        username = storage?.getItem('username')
        if (!username) {
            location.href = 'mtry.html'
            return
        }
    }
    function handleClose() {
        console.log('websocketclose');

    }
    function handleError() {
        console.log('websocketclose');

    }
    function handlemessage(e) {
        // e, 事件对象，接受websocket返回的信息
        const messagedata = JSON.parse(e.data)
        clist.appendChild(createMessage(messagedata))
    }
    function createMessage ({user, message, dataTime}) {
        const oItem = doc.createElement('li')
        oItem.innerHTML = `
            <p>
                <span>${user}</span>
                <i> ${new Date (dataTime)} </i>
            </p>
            <p>消息：${message}</p>
        `
        return oItem
    }
    init()
})(document, localStorage, location, WebSocket)