setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe")
  .addEventListener("click", function x() {
  console.log("Button Clicked", ++count);
  });
}

