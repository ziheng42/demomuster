((doc, storage, location) => {

    const ousername = doc.querySelector('#username')
    const oentbtn = doc.querySelector('#enter')
    const relirf = document.querySelector('.relirf') //浮雕
    const jsinterface = document.querySelector('.jsinterface')

    const init = () => {
        bindclick()
    }

    function bindclick () {
        oentbtn.addEventListener('click', handleEnterBtnclick, false)
        
        relirf.addEventListener('click', handleEntryRelief, false)
        jsinterface.addEventListener('click', handleInterfaceJs, false)
    }

    function handleEnterBtnclick () {
        const username = ousername.value.trim()
        // if(username.length < 6){
        //     alert('用户名不得小于6位')
        //     return
        // }

        storage.setItem('username', username)
        location.href = 'message.html'
    }

    function handleEntryRelief () {
        location.href = 'fudiaoform.html'
    }
    function handleInterfaceJs () {
        location.href = 'interfaceJs.html'
    }

    init()

})(document,localStorage, location)

