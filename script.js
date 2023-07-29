let form = document.getElementById('signup');
let submitBtn = document.getElementById('submit-button');


let user = JSON.parse(localStorage.getItem('user'));

if(user){
    window.location.href = 'details.html';
}


submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let userName = document.getElementById('name').value.trim();
let email = document.getElementById('email').value.trim();
let password = document.getElementById('password').value.trim();
let confirmPassword = document.getElementById('confirm-password').value.trim();
const warningMessage = document.querySelector('.warning-message');

    console.log(userName,email,password,confirmPassword);

    if(userName === "" || email === "" ||
    password === "" || confirmPassword === "" ){
    
        warningMessage.style.display = "block";

        return;
    }

    if(password != confirmPassword){
        console.log("wrong password");
        warningMessage.innerHTML = `Password do not match`;
        warningMessage.style.display = "block";
        return;
    }

    let token = generateToken();

    let userObj = {
        userName : userName,
        email : email,
        token : token,
        password : password,
    }

    localStorage.setItem('user', JSON.stringify(userObj));

    console.log("success");
    warningMessage.style.display = "block";
    warningMessage.innerHTML = "Signup Successful... redirecting to details page"

    setTimeout(()=>{
        window.location.href = './details.html';
    },2000);
});

function generateToken(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length = 16;
    let result = ' ';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}