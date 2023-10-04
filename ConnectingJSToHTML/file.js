const button = document.querySelector('button');
// window.addEventListener('DOMContentLoaded', main);


button.addEventListener('click', setBackgroundColor);
function setBackgroundColor() {
    document.body.style.backgroundColor = '#0D0D';
}