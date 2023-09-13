function* rangeIterator(begin, end, step) {
    let iterationCount = 0;
    for (let i = begin; i < end; i += step) {
        iterationCount ++;
        yield i;
    }
    return iterationCount;
}

const it = rangeIterator(1, 20, 3);
let response = it.next();

while (!response.done) {
    console.log(response.value);
    response = it.next();
}