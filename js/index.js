// Your code goes here

//Event 1 - click

//Event 2 - keydown

//Event 3 - mousemove

//Event 4 - scroll

//Event 5 - dblclick

//Event 6 - resize

//Event 7 - mouseover
const buttons = document.querySelectorAll('.btn');
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