// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello world!!!!!!"), 1000);
//   });

//   const error = true;

//   if(!error) {
//     const response = await promise; // this will await until promise is resolved
//     return response
//   } else {
//     await Promise.reject(new Error("Something went wrong!!!!!!"));
//   }
// }

// myFunc()
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

async function getUsers() {
  // await the response of the detch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users")

  // only proceed once it promise is resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data
}

getUsers()
  .then(users => console.log(users));


