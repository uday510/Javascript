for (let i = 1; i <= 10; i++) console.log(i, "",i + 10, "", i + 20);

const myStates = [
     "Telangana", 
     "Himachal Pradesh",
      1947,
     "Delhi", 
     "Tamil Nadu"
    ];

    // for(let i = 0; i < myStates.length; i++) {
    //     if (typeof myStates[i] !==  "string" )  continue;
    //     console.log(myStates[i])

    // }

    let i = 0;

    // while ( i < myStates.length ) {
    //     console.log(myStates[i])
    //     i++;
    // }

    
do {
    console.log(myStates[i]);
    i++;
  }  
  while ( i < myStates.length );



  



