// callback function
// function greeting(cb) {
//   setTimeout(() => {
//     console.log("Greeting");
//     cb(); // callback hell
//   }, 3000);
// }

// function gotoschool() {
//   setTimeout(() => {
//     console.log("go to school");
//   }, 5000);
// }

// greeting(gotoschool);
// console.log("hello");

// promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (2 > 3) resolve(10);
    reject(100);
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) resolve(20);
  }, 5000);
});

promise1
  .then((data1) => {
    console.log(data1);
    return promise2;
  })
  .then((data2) => console.log(data2))
  .catch((err) => console.log(err));

console.log("main thread");

// async - await

function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "kent",
      });
    }, 1000);
  });
}

function getPostUser(_name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(_name);
      if (_name === "kent") {
        res([{ id: 1, post: "hahha" }]);
      }
    }, 2000);
  });
}

// getUserInfo()
//   .then((user) => {
//     console.log(user);
//     return getPostUser(user.name);
//   })
//   .then((data) => console.log(data));

async function loadData() {
  const user = await getUserInfo();
  const post = await getPostUser(user.name);
  console.log(`${user}: ${post}`);
}

loadData();
