// function filtter(arr, Cb) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Cb(arr[i])) {
//       console.log(`Number is ${arr[i]}`);
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function isNeg(n) {
//   return n <= 0;
// }

// function isPos(n) {
//   return n >= 0;
// }
// console.log(filtter([-1, 2, -3, 5], isPos));
// console.log(filtter([-1, 2, -3, 5], isNeg));
// console.log(isPos);

// [1, 2, 3].forEach((n, ci) => {
//   console.log(n + 1, ci);
// });

// ["baegie", "Banana", "Mr Donut"].forEach((sn, i) => {
//   if (sn.startsWith("Mr")) {
//     console.log(sn + i);
//   }
// });

// const res = ["baegie", "Banana", "Mr Donut", "Mr tee"].map((sn, i) => {
//   return sn.startsWith("Mr");
// });

// console.table(res);

// let result = [13, 3, 8, 5, 7, 6, 26];

// result.filter((vl) => {
//   return vl % 3 === 0 || vl % 13 === 0;
// });
// console.table(result);

// function newNum(vl, cd) {
//   let newArr = new Array(vl.length);
//   for (let i = 0; i < vl.length; i++) {
//     if (cd(vl[i])) {
//       newArr[i] = vl[i] * 2;
//     } else {
//       newArr[i] = vl[i];
//     }
//   }
//   return newArr;
// }

// const number = [50, 13, 66, 80];

// console.log(
//   newNum(number, (n) => {
//     return n % 5 === 0;
//   })
// );

const detail = [
  ["A", 22, true],
  ["B", 26, true],
  ["C", 28, false],
];

function personType(pd) {
  return {
    name: pd[0],
    age: pd[1],
    thai: pd[2],
  };
}

personType(detail);
console.log();

function reTail(dp) {
  let newArrv = new Array(dp.length);
  for (let i = 0; i < dp.length; i++) {}
  return newArrv;
}

reTail();
