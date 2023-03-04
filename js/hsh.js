

const password =document.getElementById("pass")

const toggle =document.getElementById('togg')

function showhide(){
    if(password.type==='password'){
        password.setAttribute('type','text');
        toggle.classList.add('hid')
    }
    else{
        password.setAttribute('type','password');
        toggle.classList.remove('hid')
    }
}
