// document.cookie = `user=default; expires=${new Date().toUTCString()}`;

// document.cookie = `user=defaul; max-age=10`;
// document.cookie = `user=defaul; path=/mydi`;

// document.cookie = `user=default; secure; samesite=strict`;

// console.log(document.cookie);


// const course = document
//     .cookie
//     .split('; ')
//     .find(cookie => cookie.startsWith('user='))
//     .split('=')[1];

// console.log(course);

// localstorage, sessionstorage



localStorage.setItem('user', 'admin');
localStorage.setItem('storage', 'local');

console.log(localStorage);

// localStorage.removeItem('user');
// console.log(localStorage);

localStorage.clear();

console.log(localStorage);

// console.log(localStorage.getItem('user')); // null

// console.log(typeof null);


// console.log(indexedDB.databases);

const DB = indexedDB.open('DB 1', 1);

// DB.addEventListener('upgradeneeded', event => {
//     const database = event.target.result;
//     const store = database.createObjectStore('users', { keyPath: 'id' });
//     store.createIndex('user', 'user');

//     store.add({
//         id: 1,
//         name: 'Uday'
//     });
//     store.add({
//         id: 2,
//         name: 'Teja'
//     });
// });


// DB.addEventListener('success', event => {
//     const database = event.target.result;
//     const request = database
//         .transaction(['users'], 'readwrite')
//         .objectStore('users')
//         // .get(3)
//         // .delete(1);
//         // .add({
//         //     id: 3,
//         //     name: 'uDAy'
//     // });
//     request.addEventListener('success', event => {
//         console.log(event.target.result);
//     })
// })








