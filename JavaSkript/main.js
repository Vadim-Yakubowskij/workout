const header = document.querySelector(".header");
const button3 = document.querySelector(".button3");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button = document.querySelector(".button");
console.log(header);
window.addEventListener("scroll",function(){
    let scrollPos = window.scrollY;
    if(scrollPos > 0){
        header.classList.add('red');
        button.classList.add('red');
        button1.classList.add('red');
        button2.classList.add('red');
        button3.classList.add('red');
    }
    else{
        header.classList.remove('red');
        button.classList.remove('red');
        button1.classList.remove('red');
        button2.classList.remove('red');
        button3.classList.remove('red');
    }
});