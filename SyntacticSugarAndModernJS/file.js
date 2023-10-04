const arr = [1, 2, 3, 4];

const doubled = arr.map((num) => num * 2);

// console.log(doubled);



const [first, second, ...rest] = arr;

// console.log(rest);

const person = {
    name: 'Uday',
    website: 'https://www.website.com'
}

const { name: firstName } = person;

// console.log(firstName);

function printName({ name }) {
    console.log(name);
}

// printName(person)


function add(num1, num2) {
    console.log(num1 + num2);
}

const arr2 = [10, 11, 12, 13, 14];

// rest operator
const combined = [...arr, ...arr2];

// console.log(combined);


// spread operator
function fun(x, ...res) {
    console.log(x);
    console.log(res);
}

// fun(1, 2, 3);


const name = null;

const defaultName = name ?? 'Default Name'
console.log(defaultName);
console.log(`${name} -> Author ${0/1}`);



const obj2 = {
    company: {
        website: "website",
        newCompany: {
            website : "new website"
        }
    }
}

// console.log(obj2.company?.newCompany.name ?? 'Not exist');

const shouldRunCode = true;

function logWorld() {
    console.log('Hello World');
}

shouldRunCode && logWorld();