// const button = document.querySelector('button');

// button.addEventListener('click', onClick, {
//     capture: true, // bubbling face
//     once: true,
//     passive: true,
//     signal: AbortController.signal
// });

// document.body.addEventListener('click', onClick);

// console.log(document.body);

// function onClick(event) {
// console.log('Type ->', event.type);
// console.log('Target ->', event.target);
// console.log(event);
// event.preventDefault();
// console.log('This ->', this);
// console.log('Button Clicked');

// console.log(event.target);
// console.log(this);
// }

// button.addEventListener('mousedown', onClick);



// button.removeEventListener('click', onClick);






// window.addEventListener('keydown', event => {
//     console.log(event.code);
// })

const scrollable = document.getElementById('scrollable');


// scrollable.addEventListener('mouseenter', event => {
//     console.log(event.pageX, event.pageY);
// })

const button = document.querySelector('button');

// button.addEventListener('dragstart', event => {
//     console.log(event);
// });

// scrollable.addEventListener('drop', event => {
//     scrollable.prepent(event);
// });

// scrollable.addEventListener('dragover', event => {
//     event.preventDefault();
// });

scrollable.addEventListener('click', event => {
    if (event.target != this) {
        event.target.textContent = 'Clicked';
    }
});