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
// function primen(n) {
// if ( n < 1) {
//     return [];
// }

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

//exercises 10

// function drawDown(n) {
//   let peak = 0;
//   let maxDown = 0;
//   let btwVl = 0;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] > n[i]) {
//       peak = n[i];
//     }
//   }

//   //   let peak = Math.max(...n);
//   //   let maxDown = 0;

//   //   for (let i = 0; i < n.length; i++) {
//   //     if (peak - n[i]) {
//   //       maxDown = peak - n[i];
//   //     }
//   //   }
//   //   return maxDown;
//   return peak;
// }

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];
// drawDown(chart);
// console.log(drawDown(chart));

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
// ****************************************************************
//exercises 14
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

// // const fid = menberArr.filter()
// ****************************************************************

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
function mode(arr) {
  const dict = {};
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (!dict[elem]) {
      dict[elem] = 1;
    } else {
      dict[elem] += 1;
    }
  }

  console.log(dict);

  let maxFreq = 0;
  let mode = null;

  for (k in dict) {
    const freq = dict[k];
    console.log(`freq ${freq} this k is ${k}`);
    if (freq === maxFreq) {
      mode = null;
      continue;
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      mode = k;
    }
  }

  return mode;
}

console.log(mode([1, 2, 1, 4, 5, 6, 2, 1, 11]));
console.log(mode([1, 2]));
//
const o = {
  foo: null,
  bar: null,
};

for (k in o) {
  console.log(k);
}

// exercises 18;
// function mid(vl) {
//   if (vl.length <= 2) {
//     return vl;
//   }

//   if (vl.length % 2 === 0) {
//     let newPos = vl.length / 2;
//     return [vl[newPos - 1], vl[newPos]];
//   }

//   return newArr;
// }

// const arr = [1, 2, 3, 4];
// console.log(mid(arr));

//exercises 21
// function flatMap(vlArr) {
//   let newArr = [];
//   for (let i = 0; i < vlArr.length; i++) {
// let inArr = vlArr[i]; // วนลูปในแต่ละตำแหน่งข้างในของ index array
//     console.log(inArr);
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
// function mapMean(vArr) {
//     let avgArr = [];
//     for (let i = 0; i < vArr.length; i++) {
//       for (let j = 0; j < vArr[i].length; j++) {
//         avgArr.push(vArr[i][j]);
//       }
//     }
//     return avgArr;
//   }
//   const arr = [
//     [1, 2, 3],
//     [100, 200],
//     [10, 20],
//   ];
//   mapMean(arr);
//   console.log(mapMean(arr));

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
