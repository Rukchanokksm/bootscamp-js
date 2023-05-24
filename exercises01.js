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

//exercises 6 *finish
// function fizzBuzz(n){
//     let sandFizz = "fizz";
//     let sandBuzz = "Buzz";
//     let result = [];
//     for (let i = 1 ; i < n; i++){
//         if ( (i % 3) == 0 ) {
//             // console.log(sandFizz)
//             result.push(sandFizz);
//         }else if ((i % 5) == 0) {
//             // console.log(sandBuzz)
//             result.push(sandBuzz);
//         }else {
//             // console.log(i)
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(fizzBuzz(21));

// exercises 7
// function gba(n1, n2) {
//   return ;
// }
// console.log(gba(10, 15));

//exercises 9
function primen(n){
    let newList =new Array(n);
    for (let i = 0; i < n;i++){
            newList[i] = i  + 2   
    }
    return newList;
}
console.log(primen(4))
//exercises 11
// function articleFuc(text, overText, count) {}

// const articleCleverse = "Test.";
// console.log(articleCleverse.length);

// exercises 12 *finish
// function filterLt(n, chackArr) {
//   let newArrBox = [];

//   for (let i = 0; i < chackArr.length; i++) {
//     if (chackArr[i] < n) {
//       newArrBox.push(chackArr[i]);
//     }
//   }
//   return newArrBox;
// }

// const arr = [120, 112, 111, 130, 169, 101];

// console.log(filterLt(112, arr));

// exercises 13 *finish
// function filterLt(n , chackArr){
//     let newArrBox = [];

//     for (let i = 0; i < chackArr.length; i++){
//         if (chackArr[i] > n) {
//             newArrBox.push(chackArr[i])
//         }

//     }
//     return newArrBox;
// }

// const arr = [120, 112, 111, 130, 169, 101]

// console.log(filterLt(0, arr));

// exercises 16 *finish
// function mean(onArr){
// let resultAvg;
// let giv;
//     for (let i = 0; i < onArr.length; i++){
//         if (typeof(arrAvg[i]) === "string") {
//             resultAvg = null;
//             return resultAvg
//         }
//             giv = onArr.reduce((sum ,total) => {
//                 return sum + total;-
//             }) ;
//             resultAvg = giv / arrAvg[i];

//     }
//     return resultAvg;
// }
// const arrAvg = [1,2,3];
// console.log(mean(arrAvg));
// console.log(typeof(arrAvg[2]))
