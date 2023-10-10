const BASE_API = 'http://localhost:8080/api';
const JSON_API = 'http://localhost:8080/jsonApi';
const POST_API = 'http://localhost:8080/postApi';
const SLOW_API = 'http://localhost:8080/slowApi';


const form = document.getElementById('form');
// console.log(form);

form.addEventListener('submit', onSubmit);
async function onSubmit(event) {
    event.preventDefault();

    const options = {
        method: 'POST',
        body: new FormData(form),
    };

    // console.log("BODY", options.body)

    try {
        const response = await fetch(POST_API, options);
        const text = response.text();
        console.log(text);
    } catch (error) {
        throw new Error(error);
    }
}

const data = {
    name: 'Alan Turing',
}

const headers = new Headers();
headers.append('Content-Type', 'application/json; charset=utf-8');

// const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers
// }

// const url = new URL(POST_API, options);
//
// url.searchParams.set('firstName', 'Alan');
// url.searchParams.set('secondName', 'Turing');
//
//
// async function main() {
//     try {
//         const response = await fetch(url);
//         const text = await response.text();
//         console.log(text);
//     } catch (error) {
//         throw new Error(error);
//     }
// }
//
// main();

// fetch(url)
//     .then(res => res.text())
//     .then(console.log)
//     .catch(err => console.error(err))
//     .finally(console.log('Connected Closed.'));
