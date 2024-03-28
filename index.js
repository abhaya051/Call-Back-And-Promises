//Call Back << Promises Chaining << Async Await

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
// let promise =  Promise((resolve, reject) => {
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

// ----------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1st Way To Known
// let promise = new Promise(function (resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(function () {
//     console.log("Success, You are a GEEK");
//   })
//   .catch(function () {
//     console.log("Some error has occurred");
//   });

// ----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Example Of then And Catch
// let promise = new Promise(function (resolve, reject) {
//   let x = "Dahi Bhala";
//   let y = "Kadai Panner";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// promise
//   .then(function () {
//     console.log("Hey I Am Dahi Bhala");
//   })
//   .catch(function () {
//     console.log("Error Is Occured");
//   });

//Uses  Promise
// const prom = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise");
//     reject();
//   });
// };
// let promie = prom();
// promie.then(() => {
//   console.log("Successfully Occured Promise");
// });
// promie.catch(() => {
//   console.log("Error Occured Promise");
// });

//Chaining Promises
// let fuc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Working Data 1");
//       resolve();
//     }, 4000);
//   });
// };
// let fucii = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Working Data 2");
//       resolve();
//     }, 4000);
//   });
// };
// let fuci = fuc();
// fuci.then(() => {
//   console.log("Fetching Is Done 1");
// });
// let fuciii = fucii();
// fuci.then(() => {
//   console.log("Fetching Is Done 2");
// });

// Lets Play With Chaining
// let fuc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Working Data 1");
//       resolve();
//     }, 4000);
//   });
// };
// let fucii = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Working Data 2");
//       resolve();
//     }, 4000);
//   });
// };
// let fuci = fuc();
// fuci.then(() => {
//   console.log("Fetching Data 1");
//   let fuciii = fucii();
//   fuciii.then(() => {
//     console.log("Fetching Data 1");
//   });
// });
//This Is Called Promises Chaining

// async OR await (Suitable Method)
// function Myfun() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Done");
//       resolve();
//     }, 1000);
//   });
// }
// async function NewData() {
//   await Myfun(); //1st Call
//   await Myfun(); //2nd Call
// }

///----------------------------------------->>>>>>>>>>>>>>>>>>>> 2nd Method
// function Myfun(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Done", dataId);
//       resolve();
//     }, 1000);
//   });
// }

// async function getData() {
//   await Myfun(0);
//   await Myfun(1);
//   await Myfun(2);
//   await Myfun(3);
// }
