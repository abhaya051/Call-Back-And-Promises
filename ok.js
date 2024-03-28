// Difference Between Call Back Hell And Promise --Chaining, Async Await

// Promise

// let prom = function Myfun() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promises Is Created 1");
//       resolve();
//     }, 3000);
//   });
// };

// let prome = function Myfun() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promises Is Created 2");
//       resolve();
//     }, 3000);
//   });
// };
// let promi = prom();
// promi.then(() => {
//   console.log("Successfully Exceuted-1");
//   let promei = prome();
//   promei.then(() => {
//     console.log("Successfully Exceuted-2");
//   });
// });

// // let promei = prome();
// // promei.then(() => {
// //   console.log("Successfully Exceuted-2");
// // });

// Async And Await
// function Myfun() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Working In 3Sec");
//     }, 3000);
//   });
// }
// async function newData() {
//   console.log("Fetching Data...");
//   await Myfun();
// }

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
