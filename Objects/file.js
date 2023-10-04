console.clear();

function Website(name, rating, founders) {
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}


const frontendExpert = new Website('A', 'B', 'C');

// console.log(frontendExpert);

const id = Symbol('id');
const id3 = Symbol('id2');
const id4 = Symbol('id4');

// console.log(id4);


const obj = {

    [id]: 1234,
    id: 12,
    rating: 5,
    creators: ['Dennis Retchie', 'Ken Thompson'],
    [Symbol.toPrimitive](hint) {
        if (hint == 'number') {
            return 10;
        } else if (hint = 'string') {
            return 'Hello World'
        }

        return 2;
    }
}
const obj2 = {
    __proto__: obj,
    [Symbol('id')]: 0,
    foo: 'bar',
    hello: 'world',
    [Symbol('id')]: 0,
}


obj2.id = 10;

obj2['bar'] = 'baz';

// console.log(obj2);

// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// Object.entries(obj).forEach( (key, val) => {
//     console.log(key , " : ", val);
// });


// const newObj = {};

// Object.freeze(obj);

Object.seal(obj);

obj.id = 10;

// console.log(obj);

obj['newKey'] = 'val';

// console.log(obj);


// console.log(obj.toString());


const arr = Website.toString();

// for (let i = 0; i < arr.length; ++i) {
//     console.log(arr[i]);
// }

// console.log(obj.valueOf());

const newObj = {
    'foo': 'bar',
    'bar': 'baz',
}

// console.log(JSON.stringify(newObj));





