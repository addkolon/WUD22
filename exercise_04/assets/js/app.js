let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains-behind');
let text = document.getElementById('text');
let button = document.getElementById('button');
let mountains_front = document.getElementById('mountains-front');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){

    let value = window.scrollY;
    console.log(value);
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    header.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    button.style.marginTop = value * 1.5 + 'px';

})