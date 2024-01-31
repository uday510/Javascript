// const map = new Map();

// map.set(1, 2);
// map.set(2, 3);

// console.log(map);


// console.log(map.size);

// console.log(map.has(1));
// console.log(map.has(10));

// map.set({}, 42);

// console.log(map.has({}));

// console.log(map.has({}));

// const obj = {};

// map.set(obj, 42);

// console.log(map.get(obj));

// console.log(map.has(obj));

// map.clear();

// console.log(map);


// for ([key, value] of map) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }


// map.forEach((value, key) => {
//     console.log(`Key: ${key}, Value: ${value}`);
// })

// const iter = map.entries();
// const iter = map.keys();
// const iter = map.values();

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// const newMap = new Map([[1, 2], [2, 3]]);

// console.log(newMap);

// const set = new Set();

const weakMap = new WeakMap();


const obj = {
    1: 2,
    3: 4
}

weakMap.set(obj, "one");

console.log(weakMap.get(obj));
