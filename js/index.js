// Your code goes here

//Event 1 - click
const buttons = document.querySelectorAll('.btn');
function paraColorChange(event){
    event.target.parentElement.style.color = '#17A2B8'
}
buttons.forEach((btnEl) => {
    btnEl.addEventListener('click', paraColorChange)
})

//Event 2 - keydown
const body = document.querySelector('body');
function bgColorChange(event){
    if (event.key === 'k'){
        event.target.style.backgroundColor = 'azure';
    } else if (event.key === 'j'){
        event.target.style.backgroundColor = 'thistle';
    } else {
        event.target.style.backgroundColor = 'white';
    }
}
body.addEventListener('keydown', bgColorChange);

//Event 3 - mouseenter
const mainNav = document.querySelector('.main-navigation');
function makePurple(event){
    event.target.style.backgroundColor = 'orchid';
}
mainNav.addEventListener('mouseenter', makePurple)

//Event 4 - mouseleave
function makeWhite(event){
    event.target.style.backgroundColor = 'white';
}
mainNav.addEventListener('mouseleave', makeWhite)


//Event 5 - dblclick
function spin(event){
    event.target.parentElement.style.transform = 'rotate(360deg)';
    event.target.parentElement.style.transition = 'transform 1s';
}
buttons.forEach((btnEl) => {
    btnEl.addEventListener('dblclick', spin)
})

//Event 6 - resize

//Event 7 - mouseover
function enlarge(event){
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transition = 'transform 1s';
}
buttons.forEach((btnEl) => {
    btnEl.addEventListener('mouseenter', enlarge);
})

//Event 8 - mouseout
function shrink(event){
    event.target.style.transform = 'scale(1)';
}
buttons.forEach((btnEl) => {
    btnEl.addEventListener('mouseout', shrink);
})

//Event 9 - 

//Event 10 - 

//Stop default behaviour on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((navLinkEl) => {
    navLinkEl.addEventListener('click', (event) => {
        event.preventDefault();
    })
})