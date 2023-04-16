let menubar=document.querySelector('#menubar');
let mynav=document.querySelector('.navbar');

menubar.onclick=()=>{
    menubar.classLlist.toggle('fa-times')
    mynav.classList.toggle('active')
}

