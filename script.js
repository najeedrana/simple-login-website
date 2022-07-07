const inputs = document.querySelectorAll('input'); 
const patterns = { 
    username: /^[a-z0-9]{3,20}$/,
    password: /^[a-z0-9@]{8,20}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
} 
function validate(regex,field){ 
    if(regex.test(field.value)){ 
        field.className = "valid"

    }else{
        field.className = "invalid"
    }
}

inputs.forEach((input) => { 
    input.addEventListener('keyup' , (e) => { 
    validate(patterns[e.target.attributes.name.value],e.target)
    })
    
})
// STORING LOGIN INFORMATION IN A VARIABLE
let userName = document.getElementById('username');
let eMail = document.getElementById('email');
let passWord = document.getElementById('password');
let userNamename;
let eMailmail;
let passWordpass;
function storeValue() {
    localStorage.setItem('USERNAME',userName.value);
    localStorage.setItem('PASSWORD',eMail.value)
    localStorage.setItem('EMAIL',eMail.value);
    if(userName.className ==='invalid' || eMail.className==='invalid' || passWord.className==='invalid'){
        localStorage.clear();
        alert('One or more of the input fields is invalid please try again')
    }else {
        alert("Account Creation Successful please proceed to login!")
    }
}
// Delete Current login information
function deleteDetails(){ 
    localStorage.clear();


}
// login validation
function login(){ 
    let actualUserName = localStorage.getItem('USERNAME');
    let actualPassword = localStorage.getItem('PASSWORD');
    let userNameuser = document.getElementById('userEnterUsername').value;
    let userPassuser = document.getElementById('userEnterPass').value;
    if(userNameuser === actualUserName && userPassuser === actualPassword){
        location.href = 'content.html';
    }else {
        alert("NO account present or incorrect details")
    }
}