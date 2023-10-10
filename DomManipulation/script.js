// // const secondLi = document.getElementById('second-li');
// const listItems = document.querySelectorAll('li');
// // console.log(listItems);


// // console.log(listItems.length);

// // listItems.forEach(list => console.log(list));

// // Array.from(listItems).map(list => console.log(list))

// // console.log(document.getElementsByClassName('list-item'));


// // console.log(document.getElementsByTagName('li'));

// // const listItems = document.getElementsByTagName('li');


// // listItems[0].style.color = 'red';

// // listItems[1].style.backgroundColor = 'blue'

// // listItems[2].value = 9;

// // listItems[0].setAttribute('value', '99');

// // listItems[0].setAttribute('class', 'blue big');

// // listItems[0].classList.add('blue');
// // listItems[0].classList.toggle('big');


// const p = document.createElement('p');
// const text = document.createTextNode('Old Content');
// p.textContent = 'Hello World!'

// document.body.innerHTML += '<p>HTML Test String</p>';

// console.log(listItems[0].innerHTML);

// document.body.appendChild(p);

// // p.style.backgroundColor = 'red';

// // document.body.append(p)


// // document.body.prepend(p);
// const parent = document.querySelector('ol');
// const fragment = document.createDocumentFragment();
// const listItemsToAdd = [];

// for (let i = 0; i < 3; ++i) {

//     const li = document.createElement('li');
//     li.textContent = `List item with i=${i}`;
//     fragment.append(li);
// }

// parent.append(fragment);

// // listItems[0].parentNode.removeChild(listItems[0]);

// // listItems[0].remove();

const listItems = document.querySelectorAll('li');

console.log(window.innerWidth);
console.log(window.innerHeight);

// console.log(listItems[0].style.fontSize);

// listItems[0].style.fontSize;

console.log(window.getComputedStyle(listItems[0]).fontSize);



const scrollable = document.getElementById('scrollable');

console.log(scrollable.clientHeight);
// console.log(scrollable.offsetHeight);

console.log(scrollable.scrollHeight);

// console.log(scrollable.offsetTop);

// console.log(scrollable.querySelectorAll('p')[0].offsetTop);


scrollable.querySelectorAll('p')[5].scrollIntoView();

scrollable.scrollTo({
    top: scrollable.querySelector('p')[2].offsetTop,
    behavior: 'smooth'
});