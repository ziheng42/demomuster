{

    const ausername = document.querySelector('#username')
    const apassword = document.querySelector('#password')
    const aphone = document.querySelector('#email')
    const alogin = document.querySelector('#login')

    ausername.addEventListener('blur', usernameValidata, false)
    apassword.addEventListener('blur', passwordValidata, false)
    aphone.addEventListener('blur', phoneValidata, false)
    alogin.addEventListener('click', validataForm, false)
    
    function validataForm() {
        usernameValidata()
        passwordValidata()
        phoneValidata()
    }
    function usernameValidata () {
        const ausernameValue = ausername.value.trim()
        if (ausernameValue === '') {
            printError(username, '请输入用户名')
        } else {
            removeError(username)
        }
    }
    function passwordValidata () {
        const  apasswordValue = apassword.value.trim()
        if (apasswordValue === '') {
            printError(password, '请输入passsword')
        } else {
            removeError(password)
        }
    }
    function phoneValidata () {
        const aphoneValue = aphone.value.trim();
        if (aphoneValue === '') {
            printError(email, '请输入邮件地址')
        } else {
            removeError(email)
        }
    }

    function printError(input, msg) {
        const error = input.parentElement
        error.classList.add('error')
        error.querySelector('.msg').textContent = msg
    }
    function removeError(input) {
        const error = input.parentElement
        error.classList.remove('error')
        error.querySelector('.msg').textContent = ''
    }
}