//exercises 1
// const draw = (n) => {
//   let s = "";
//   s += "*";
//   for (let i = 1; i <= n; i++) {
//     console.log((s += s));
//   }
//   return;
// };
// draw(5);

//exercises 2

// const draw = (n) => {
//   let s = "";
//   s += "*";
//   for (let i = 1; i <= n; i++) {
//     s += s;
//   }
//   return s;
// };
// console.log(draw(5));

// exercises 3

// const maxNegMinPos = (arr) => {
//   let maxValue = arr[0];
//   let maxNeg = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (maxValue < arr[i]) {
//       maxValue = arr[i];
//     } else if (arr[i] < maxNeg) {
//       maxNeg = arr[i];
//     }
//   }
//   console.log(maxValue);
//   console.log(maxNeg);
// };
// const arr = [12, -13, 14, 4, 2, -80, -18];
// maxNegMinPos(arr);

//exercises 5 *finish

// function mutual(c1, c2) {
//   let results = [];
//   for (let i = 0; i < c1.length; i++) {
//     for (let j = 0; j < c2.length; j++) {
//       if (c1[i] === c2[j]) {
//         results.push(c2[j]);
//       }
//     }
//   }
//   return results;
// }
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
// console.log(mutual(class1, class2));

// function isMember(a, v) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === v) {
//             return true
//         }
//     }

//     return false
// }

//exercises 6

// exercises 7
// function gba(n1, n2) {
//   return n2 / n1 ;
// }
// console.log(gba(10, 15));
