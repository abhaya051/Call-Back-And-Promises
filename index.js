//Async And Await

// Call Back Function
// A Call Back Function is a function passed into another function as an argument ,
// which is then invoked inside the outer function to complete an action.
// function mainFunction(callback) {
//   console.log("Performing operation...");
//   // Use setTimeout to simulate an asynchronous operation
//   setTimeout(function () {
//     callback("Operation complete");
//   }, 1000);
// }

// Define the callback function
// function callbackFunction(result) {
//   console.log("Result: " + result);
// }

// Call the main function with the callback function
// mainFunction(callbackFunction);

// --------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Promises
// JavaScript Promise are easy to manage when dealing with multiple asynchronous
// operations where callbacks can create callback hell leading to unmanageable code.
// Prior to promises events and callback functions were used but they had
// limited functionalities and created unmanageable code. Multiple callback
// functions would create callback hell that leads to unmanageable code.
//Promises Have Three States Pending And Resolved And Rejected
// Syntax
// let promise = new Promise((resolve, reject) => {
//   //
// });
// Pending State
// let promise = new Promise((resolve, reject) => {
//   console.log("Yes Done");
// });
//Resolve State
// let promise = new Promise((resolve, reject) => {
//   resolve("Success");
//   console.log("Yes Done");
// });
//Reject State
// let promise = new Promise((resolve, reject) => {
//   reject("Rejected");
//   console.log("Yes Done");
// });

//Uses  Promise
// .then()& .catch()
// const promise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     //resolve("Success");
//     reject("Rejected");
//   });
// };
// let pro = promise();
// pro.then(() => {
//   console.log("I'll Done Your Promise");
// });
// pro.catch(() => {
//   console.log("Error Is Occured");
// });
// 1st Way To Known
// let promise = new Promise(function (resolve, reject) {
//   const x = "Rohan";
//   const y = "Mohan";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// Promise
//   .then(function () {
//     console.log("Success, You are a GEEK");
//   })
//   .catch(function () {
//     console.log("Some error has occurred");
//   });

// 2nd Way To Known
// let promise = new Promise(function (resolve, reject) {
//   resolve("Uws Solution");
// });
// promise.then(
//   function () {
//     //success handler function is invoked
//     console.log("success Message");
//   },
//   function () {
//     console.log("error Message");
//   }
// );
