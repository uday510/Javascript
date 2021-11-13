// for(let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
                  "Telangana",
                  "Karnataka",
                  "Delhi",
                   1947,
                  "Punjab",
                  ];

for(let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] === "string") continue;
      //  console.log(myStates[i]);
}


let i = 0;
// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

do {
  console.log(myStates[i]);
  i++;
} 
while (i < myStates.length);

 