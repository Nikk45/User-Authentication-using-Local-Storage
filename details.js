let userDetails = document.querySelector('.user-details');
let logout = document.getElementById('logout-button');

let user = JSON.parse(localStorage.getItem('user'));

if(user){

    let userInfo = `
        <p class="name">Full Name : ${user.userName}</p>
        <p class="email">Email : ${user.email}</p>
        <p class="token">Token : ${user.token}</p>
        <p class="password">Password : ${user.password}</p>
    `;

    userDetails.innerHTML = userInfo;
}
else{
    window.location.href = 'index.html';
}

logout.addEventListener('click',()=>{
    localStorage.clear();
    window.location.href = 'index.html';
})
