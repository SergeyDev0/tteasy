// Совпадение пароля
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('passwordConfirm');
let messageMatching = document.getElementById('messageMatching');

passwordConfirm.addEventListener("input", function(){
    passwordConfirm.value !== password.value ? messageMatching.classList.add('message-matching')
    : messageMatching.classList.remove('message-matching');
    if(password.value == '' || passwordConfirm.value == ''){
        messageMatching.classList.remove('message-matching');
    }
});

password.addEventListener("input", function(){
    passwordConfirm.value !== password.value ? messageMatching.classList.add('message-matching')
    : messageMatching.classList.remove('message-matching');
    if(password.value == '' || passwordConfirm.value == ''){
        messageMatching.classList.remove('message-matching');
    }
});