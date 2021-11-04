const names = ["Youtube", "Facebook", "Twitter", "Instagram", "Amazon","Google"];


// TODO : FOR OF IS FOR ARRAYS.
for (const n of names) {
    // console.log(n);

}
    const symbol = {
        yt : "Youtube",
        ig : "Instagram",
        fb : "Facebook",
    }
// TODO : FOR OF IS FOR OBJECTS.

for(const n in symbol) {
    console.log(`Key is ${n} and value is: ${symbol[n]}`);
}