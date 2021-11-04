const priceList = [
    {
        name : "MacBook Pro 36CM 512GB M1-PRO",
        price : "194900",
    },
    {
        name : "MacBook Pro 36CM 1TB M1-PRO",
        price : "239900",
    },
    {
        name : "MacBook Pro 40CM 512GB M1-PRO",
        price : "199900",
    },
    {
        name : "MacBook Pro 40CM 1TB M1-PRO",
        price : "239900",
    },
    {
        name : "MacBook Pro 41CM 512GB M1-PRO",
        price : "259900",
    },
    {
        name : "MacBook Pro 41CM 1TB M1-MAX",
        price : "329900"
    }
];

function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    priceList.forEach((MacBook) => {
 
        const li = document.createElement("li"); // <li></li>
        li.classList.add("list-group-item");    // <li class = "list-group-item" ></li>

        const name = document.createTextNode(MacBook.name); 
        li.appendChild(name);   //<li class = "list-group-item">Complete ReactJS course</li>

        const span = document.createElement("span");  // <li class = "list-group-item">Complete ReactJS course <span></span></li>
        span.classList.add("float-right"); // <li class = "list-group-item">Complete ReactJS course <span class = "float-right"></span></li>

        const price = document.createTextNode("₹ " + MacBook.price);  // <li class = "list-group-item">Complete ReactJS course <span class = "float-right"></span></li>
        span.appendChild(price);    // <li class = "list-group-item">Complete ReactJS course <span class = "float-right">2.3</span></li>

        //Inject span into li

        li.appendChild(span);
        ul.appendChild(li);
    
    });
}

// generateLIST();

window.addEventListener("load", generateLIST());

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
        priceList.sort((a, b) => (a.price - b.price) );
        generateLIST();

});

const buttonUnSort = document.querySelector(".unsort-btn")
buttonUnSort.addEventListener("click", () => {
        priceList.reverse((a, b) => (a.price - b.price) );
        generateLIST();

});

