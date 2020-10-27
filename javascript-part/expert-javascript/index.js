// callback function
function greeting(cb) {
  setTimeout(() => {
    console.log("Greeting");
    cb(); // callback hell
  }, 3000);
}

function gotoschool() {
  setTimeout(() => {
    console.log("go to school");
  }, 5000);
}

greeting(gotoschool);
console.log("hello");

// promise
