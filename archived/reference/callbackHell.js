function cheese() {
    console.log('Add lots of cheese');
}

function patty(cheese) {
    console.log('Add veggies and patties');
    cheese();
}

function bun(patty) {
    console.log('Take two fresh buns');
    patty(cheese);
}

function burger(bun) {
    setTimeout( () => {
        bun(patty);
        console.log('Our Burger is ready');
    }, 2000)
}

burger(bun);
console.log('Lets make a Burger');