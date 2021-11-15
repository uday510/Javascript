const names = ["Youtube", "Facebook", "Twitter", "Instagram", "Amazon","Google"];


// TODO : FOR OF IS FOR ARRAYS.

for (const n of names) {
    console.log(n);
}    
// TODO : FOR IN IS FOR OBJECTS. IN --> is for objects.
console.log("----------------------->");
const symbols = {
yt: "youtube",
ig: "Instagram",
fb: "Facebook",
lco: "LearnCodeOnline.in"
}
for (const n of symbols) {
    console.log(`
    key is ${n} and value is: ${symbols[n]}`);
}