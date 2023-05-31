//exercises 1 *finish
// const draw = (n) => {
//   let s = "";

//   for (let i = 1; i <= n; i++) {
//     console.log((s = "******"));
//   }
//   return s;
// };
// console.log(draw(5));
// =====================================================================

// const draw = (n) => {
//   let s = "";
//   for (let i = 1; i <= n; i++) {
//     console.log(s += "*") ;
//   }
//   return s;
// };
// draw(5);

//output
// *
// **
// ***
// ****
// *****
// ===============================================================

// exercises 3 *finish

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

//   return maxValue; //output 14
//   // return maxNeg; //output -80
// };
// const arr = [12, -13, 14, 4, 2, -80, -18];
// console.log(maxNegMinPos(arr));
// ==================================================================

// exercises 4 *finish
// function fiboNan(n) {
//   if (n <= 2) {
//     return n;
//   }
//   return (n = n - 1 + (n - 2));
// }
// console.log(fiboNan(2));
//===================================================================

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

// =====================================================================

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
//===========================================================

// exercises 7 *finish
// function gba(n1, n2) {
//   let n;
//   for (let i = 1; i < (n1 + n2) / 2; i++) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       n = i;
//       continue;
//     }
//   }
//   return n;
// }
// console.log(gba(18, 12));
// ===============================================================

// exercises 8 *finish
// function reSrt(a, b) {
//   return a - b;
// }
// const arr = [3, 2, 1, 12, 13, 11];
// console.log(arr.sort(reSrt));
// console.log(arr); // [1, 11, 12, 13, 2, 3]
// ==================================================================

//exercises 9
// function primen(n) {
//   if (n < 1) {
//     return [];
//   }

//   let newList = new Array(n);
//   for (let i = 2; i < n; i++) {
//     for (let j = 2; j < n; j++) {
//       if (i / j === 0) {
//         newList[i] = j;
//       }
//     }
//   }
//   return newList;
// }
// console.log(primen(5));
//=====================================================================

//exercises 10 *finish
// const drawDown = (maxDwn) => {
//   let kep = [];
//   for (let i = 0; i < maxDwn.length; i++) {
//     for (let j = 1; j < maxDwn.length; j++) {
//       let kepEx = 0;
//       if (maxDwn[i] - maxDwn[i + j] >= 0) {
//         kepEx = maxDwn[i] - maxDwn[i + j];
//         kep.push(kepEx);
//       }
//     }
//   }
//   return Math.max(...kep);
// };

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];
// console.log(drawDown(chart));

// ===================================================================

//exercises 11
// const articleFuc = (text, n) => {
//   let newMasg;
//   for (let i = 0; 1 < n; i++) {
//     if (text[n] === " ") {
//       return (newMasg = '"' + text.slice(i) + ' ..."');
//     }
//   }
//   return newMasg;
// };

// const articleCleverse = "Test. finde the h";
// console.log(articleFuc(articleCleverse, 20));

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
// console.log(filterLt(112, arr));

// #solution 2
// const arr = [120, 112, 111, 130, 169, 101];
// let listitem = arr.filter((fil) => {
//   return fil < 112;
// });
// console.log(listitem);
// =================================================================

// exercises 13 *finish
// function filterLt(n, chackArr) {
//   let newArrBox = [];
//   if (arr[0] === 0) {
//     return newArrBox;
//   }

//   for (let i = 0; i < chackArr.length; i++) {
//     if (chackArr[i] > n) {
//       newArrBox.push(chackArr[i]);
//     }
//   }
//   return newArrBox;
// }

// const arr = [120, 112, 111, 130, 169, 101];

// console.log(filterLt(0, arr));
// ****************************************************************
//exercises 14 *finish
// function isMember(arr, n) {
//   let found = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (n === arr[i]) {
//       found = true;
//     }
//   }
//   return found;
// }

// const menberArr = [1, 3, 7, 12];
// console.log(isMember(menberArr, 123));

// const fid = menberArr.filter()
// ****************************************************************
// // exercises 15 *finish
// const compoundedReturn = (amt, int, y) => {
//   let result = 0;
//   for (let i = 1; i <= y; i++) {
//     result += (int / 100) * (amt + result);
//   }
//   return result + amt;
// };

// console.log(compoundedReturn(100, 10, 2));

// exercises 16 *finish
// function mean(onArr) {
//   let resultAvg;
//   let giv;
//   for (let i = 0; i < onArr.length; i++) {
//     if (typeof arrAvg[i] === "string") {
//       resultAvg = null;
//       return resultAvg;
//     }
//     giv = onArr.reduce((sum, total) => {
//       return sum + total;
//     });
//     resultAvg = giv / arrAvg[i];
//   }
//   return resultAvg;
// }
// const arrAvg = [1, 2, "foo"];
// console.log(mean(arrAvg));
// console.log(typeof arrAvg[2]);

// function mean(n) {
//   let newVl;
//   let nonNum;
//   for (let i = 0; i < n.length; i++) {
//     if (typeof n[i] === "string") {
//       let nonNum = null;
//       return nonNum;
//     }
//     newVl.push();
//   }
//   return newVl;
// }

// const myArr = [1, 2, 3];
// console.log(mean(myArr));
// *****************************************************
//exercises 17
// function mode(arr) {
//   const dict = {};
//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];

//     if (!dict[elem]) {
//       dict[elem] = 1;
//     } else {
//       dict[elem] += 1;
//     }
//   }

//   console.log(dict);

//   let maxFreq = 0;
//   let mode = null;

//   for (k in dict) {
//     const freq = dict[k];
//     console.log(`freq ${freq} this k is ${k}`);
//     if (freq === maxFreq) {
//       mode = null;
//       continue;
//     }

//     if (freq > maxFreq) {
//       maxFreq = freq;
//       mode = k;
//     }
//   }

//   return mode;
// }

// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1, 11]));
// console.log(mode([1, 2]));
// //
// const o = {
//   foo: null,
//   bar: null,
// };

// for (k in o) {
//   console.log(k);
// }

// exercises 18;
// function mid(vl) {
//   let newArr = [];
//   if (vl.length <= 2) {
//     return vl;
//   }

//   if (vl.length % 3 === 0) {
//     let newPos = vl.length / 2;
//     return [vl[newPos - 1], vl[newPos]];
//     // newArr.push([vl[newPos - 1], vl[newPos]]);
//   }

//   return newArr;
// }

// const arr = [1, "foo", 3, "hello", 4];
// console.log(mid(arr));
// ========================================================================
// exercises 20 *finish
// const innitArr = (num, count) => {
//   let numArr = [];
//   for (let i = 0; i < count; i++) {
//     numArr.push(num);
//   }
//   return numArr;
// };

// console.log(innitArr(8, 5));

// const innitArr = (num, len) => {
//   let runArr = new Array(len);
//   return runArr.fill(num);
// };
// console.log(innitArr(2, 8));

// =======================================================================

//exercises 21 *finish
// function flatMap(vlArr) {
//   let newArr = [];
//   for (let i = 0; i < vlArr.length; i++) {
//     let inArr = vlArr[i]; // วนลูปในแต่ละตำแหน่งข้างในของ index array
//     // console.log(inArr);
//     for (let j = 0; j < inArr.length; j++) {
//       newArr.push(inArr[j]);
//     }
//   }
//   return newArr;
// }
// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
// flatMap(arr);
// console.log(flatMap(arr));

// exercises 22 *finish
// function mapMean(vArr) {
//   let avgArr = [];
//   let inV = 0;
//   for (let i = 0; i < vArr.length; i++) {
//     inV = vArr[i].reduce((total, sum) => {
//       return total + sum;
//     });
//     avgArr.push((allV = inV / vArr[i].length));
//   }
//   return avgArr;
// }
// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
// console.log(mapMean(arr));

//exercises 23 *finish
// function unique(myArr) {
//   let newArr = [];
//   for (let i = 0; i < myArr.length; i++) {
//     if (typeof myArr[i] !== "number") {
//       newArr.push(myArr[i]);
//       continue;
//     }
//     newArr.push(myArr[i] * -1);
//   }
//   return newArr;
// }
// const arr = [-1, 5, 4, "yum"];
// console.log(unique(arr));

// ************************************************
//exercises 27 *finish
// function tobyteText(nt) {
//   let numBerText = [];
//   for (let i = 0; i < nt.length; i++) {
//     numBerText.push(nt.charCodeAt(i));
//   }

//   return numBerText;
// }
// const text = "Hello ";
// tobyteText(text);
// console.log(tobyteText(text));
// ==================================================================
// exercises 28

// const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
// const byte = [];
// const transpost = (imageBytes, w, h) => {
//   if (w < 1 || 1 > h) {
//     return [];
//   }
//   let vaR = [];
//   for (let i = 0; i < imageBytes.length; i++) {
//     let wid = [];
//   }
//   //   let imgByi = [];
//   //   for (let i = 0; i < h; i++) {
//   //     let wid = new Array(w);
//   //     wid.fill(h);
//   //     imgByi.push(wid);
//   //   }
//   //   return imgByi;
// };

// console.log(transpost(imageBytes, 2, 8));
