//task encoding-line

// let newStr='';
//   let arr=[];
//   let count=0;
//   str = 'aabbccc';
//     if(str === ""){
//       console.log("arr1: " + arr);
//        return arr;
//     }else{
//       for(let i=0; i<str.length;i++){
//         //console.log("arr5: " + arr);
        
//         if(str[i] != str[i+1]){
//             console.log("str[i]: " + str[i] + " " + str[i+1])
//           count++;
          
//           arr.push(count, str[i]);
//           console.log("test2: " + arr);
//   //         arr[arr.length-1].push(count);
//   //         arr[arr.length-1].push(str[i]);
//           count=0;
          
//         }else{
//           count++;
//         }
//     }
//   }
//   console.log("arr0: " + arr);
// // }
//   for (let i=0;i<arr.length;i++){
//     if(arr[i] == 1){
//         i++;
//         newStr +=arr[i];
//     }else{
//         newStr +=arr[i];
//     }
      
//   }
//   console.log("newStr: " + newStr);

//file-names
// let names = ["file", "file", "image", "file(1)", "file"];
// let newArr = [];
// let res;
//   let count = 0;
//   let countStr;
//   for(let i=0;i<names.length;i++){
//     for(let j=i+1;j<names.length;j++){
//         if(names[j] == names[i]){
//             console.log("names[j] " + names[j]);
//             newArr.push(names[i]+"()")
//         }else{
//             newArr.push(names[i])
//         }
//     }
//   }
//   console.log("newArr " + newArr);
//   for(let i=0;i<names.length;i++){
//     console.log("if: " + names.includes(names[i]));
//     res = names.find(item => item == names[i]);
//     console.log("res: " + res);
//     if(names.includes(names[i])){
//         if(names[i].includes('(')){
//             countStr = names[i].slice(names[i].length-4, names[i].length-1);
//             console.log("countStr: " + countStr);
//             count = countStr[1] +1;
            
//         }else{
            
//             count++;
//             console.log("names[i]: " + names[i] + " count2: " + count);
//         }
//         console.log("count1: " + count);
//         newName = names[i]+"(" + count + ")";
//         console.log("newName: " + newName)
//         newArr.push()
//     }else{
//       newArr.push(names[i]);
//     }
//   }
  

//delete digit 
// let n = 1011;
// let str, str1, str2, str3='', arr=[];
//    str = n.toString();
//   str1 = str.slice(1);
//   str2 = str.slice(0,str.length-1);
//   str3 = str.slice(0,str.length-1);
//   console.log("str2: " + str1 + " " + str2);
//   arr.push(str1);
//   arr.push(str2);
//     if(str.length <3){
//         console.log("length = 3");
//     }else{
//         for(let i=0;i<str.length;i++){
   
//             if (i==2){
//                 i++;
//             }else if(i==3){
//                 i++;
//             }
//             console.log()
//             str3 += str[i];
                
//            }
//     }
   
//    console.log("str3: 3 " + str3 + " " + str.length) ;
//    arr.push(str3);
//    console.log("arr: " + arr);
   //пока не подходит
//   console.log("str: " + str);
//   str1 = str.slice(1);
//   str2 = str.slice(0,str.length-1);
//   console.log("str2: " + str1 + " " + str2);
//   if(str1 > str2) {
//     console.log("str 1: " + Number(str1));
//   }else{
//     console.log( "str 2: " + Number(str2));
//   }


//email
// str = 'prettyandsimple@example.com';
// str = 'very.unusual.@.unusual.com@usual.com';
// let count = str.lastIndexOf('@')+1;
// console.log();
// console.log(str.slice(count));

//  matrix = [
//     [1, 2, 3, 4],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
//      ];
// let sum=0;
// let indexZero='', indexCurr='';
// let arrayZero=[];
// console.log("matrix: " + matrix);
// for(let i=0;i<matrix.length;i++){
//   for(let j=0; j<matrix[i].length;j++){
    
//     if(matrix[i][j] == 0){
//         indexZero= i +','+j;
//         arrayZero.push(indexZero);
//         console.log('indexZero ' + indexZero);
//     }
      
//   }
// }

// for(let i=0;i<matrix.length;i++){
//     for(let j=0; j<matrix[i].length;j++){
//       //console.log("indexZero: " + indexZero);
//       if(i>0){
//         indexCurr = (i-1) +','+j;
//         console.log("indexCurr: " + indexCurr);
//         if(arrayZero.includes(indexCurr)){
//             console.log("arrayZero.includes(indexZero): " + arrayZero.includes(indexCurr))
//           }else{
//             sum += matrix[i][j];
//             console.log("test1 matrix[i][j]: " + matrix[i][j]);
//           }
//       }else{
//         sum += matrix[i][j];
//         console.log("test2 matrix[i][j]: " + matrix[i][j]);
//       }

//     }
//   }
// console.log("arrayZero: " + arrayZero);
// console.log("sum: " + sum);

//sum digit 
// let n = 91;
// let str = '';
// str = n.toString();

// let res;
// let sum = 0;
// console.log(str );

//     for(let i = 0; i<str.length;i++){
//         sum += Number(str[i]);
//         //console.log(sum);
//       }
    
// console.log(res);

//recursive

// domains = [
//       'code.yandex.ru',
//      'music.yandex.ru',
//       'yandex.ru'
//      ];
// let res = [], newStr='';
// for (let i = 0; i<domains.length;i++){
// //  newStr = domains[i].split('.');
// for(let j=0;j<domains[i].length;j++){
//     if(domains[i][j] != '.'){
//         newStr +=domains[i][j];
//     }else{

//     }
//     console.log("newStr: " +  newStr);
// }
//  console.log("newStr: " +  newStr);
//  res.push()
// }

// let arr = [[[]]];
// function calculateDepth(arr) {
//     //throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//     if(!Array.isArray(arr)) {
//         return 0;
//     }
//     // if(arr.length == 0 || arr == []){
//     //     return 1;
//     // }

//     let count = [0];

//     // arr = [1,2,[]];
//     // calculateDepth: [1,[2],[]]
//     //    1: -
//     //    [2]: calculateDepth -> 
//     //            this.calculateDepth([2]) -> 1
//     //    []: calculateDepth -> 1
//     // -> 3

//     for(let i=0;i<arr.length;i++){
//           if(Array.isArray(arr[i])){
//               //count++;
//               count.push(calculateDepth(arr[i]));
//               console.log(arr[i] ) ;
//           }
//           console.log("arr: " + arr[i].length);
//       }
//       console.log("count: " + count + " Math.max(count)"+ Math.max(...count));
//     return 1 + Math.max(...count);
//   }
//  let a= calculateDepth(arr);
//  console.log();

//sort by height

// let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// let arrNew = [];
// for(let i=0;i<arr.length;i++){
//   if(arr[i] != -1){
//     arrNew.push(arr[i]);
//     arr[i] = '';
//   }
// }
// console.log("arr: " + arr);
// console.log("arrNew: " + arrNew);
// arrNew.sort((a,b) => { return a-b});
// console.log("arrNew: " + arrNew);
// for(let i=0;i<arr.length;i++){
//   if(arr[i] == ''){
//     arr[i] = arrNew[0];
    
//   }
// }
// return arr;



//transform array
//let arr = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5];
//[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
//[1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5];
let arr = [ '--discrard-prev', true, true, true ];
//[ '--double-prev', 1, 2, 3 ];
//[ '--discard-prev', 1, 2, 3 ];
//[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];

//[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]

let doubleNext = '--double-next';
let discardPrev = '--discard-prev';
let doublePrev = '--double-prev';
let discardNext = '--discard-next';
let indexNext, indexPrev, indexPrevDis, indexNextDis;
let action;
let res = [];
console.log("arr: " + arr);
if(!Array.isArray(arr) ) 
throw new Error("'arr' parameter must be an instance of the Array!");

if(arr.length == 0 || arr == []){
  return [];
}

if(arr.includes(doubleNext)){
  indexNext = arr.indexOf(doubleNext);
  action = 1;
  console.log('test1 ' + indexNext);
}
if(arr.includes(doublePrev)){
  indexPrev = arr.indexOf(doublePrev);
  action = 2;
  console.log('test2 ' + indexPrev);
}
if(arr.includes(discardNext)){
  indexNextDis = arr.indexOf(discardNext);
  action = 3;
  console.log('test3 ' + indexNextDis);
}
if(arr.includes(discardPrev)){
  indexPrevDis = arr.indexOf(discardPrev);
  action = 4;
  console.log('test4 ' + indexPrevDis);
}
if( indexNext === undefined &&  indexPrev === undefined &&  indexNextDis === undefined && indexPrevDis=== undefined){
    console.log('test55 ' + indexPrevDis + " arr3: " + arr);
    //  for(let j = 0; j<arr.length; j++){
    //     if(typeof arr[i] !== number ){
    //         return undefined;
    //     }
    //  }
    return arr; 
    }
for(let i = 0;i<arr.length;i++){
  if( i == indexNext ||  i == indexPrev ||  i == indexNextDis){
      if( i == indexNext) {
          if(indexNext != arr.length){
              console.log("test0: " + i + " index " + indexNext + " act: " + action);
              res.push(arr[i+1]);
          }else{
              console.log("test00: " + i + " index " + indexPrev + " act: " + action);
              //res.push(arr[i+1]);
          }
      }
      if( i == indexPrev){
          if(indexPrev != 0){
            if(indexNextDis != (i-2)){
              console.log("indexNextDis 00:" + indexNextDis + " i: " + i + " res1: " + res);
              //console.log("qqq: " + i + " nextdis")
              res.push(arr[i-1]);
            }else{
              continue;
            }
          }else
            if(indexPrev == 0 && indexNext === undefined &&  
              indexPrevDis === undefined && indexNextDis=== undefined){
              console.log("indexPrevDis 001 :" + indexPrevDis + " i: " + i + " res1: " + res);
               arr.shift();
               console.log("arr 44: " + arr);
               return arr;
              }
          }
      
      // if( i == indexPrevDis){
      //     res.pop();
      // }
      if( i == indexNextDis){
        if(indexNextDis == arr.length){
          arr.pop();
          return arr;
        }else{
          console.log("qqq: " + i + " nextdis" + " res2: " + res);
          //res.pop();
          i++;
          console.log("qqq 00: " + i + " nextdis" + " res2: " + res);
        }
        

    }

  }else{
      if( i == indexPrevDis){
        if(indexPrevDis != 0 ){
          if(indexNextDis != (i-2)){
              console.log("indexPrevDis:" + indexPrevDis + " i: " + i + " res1: " + res);
              //console.log("qqq: " + i + " nextdis")
              res.pop();
          }else{
              console.log("indexPrevDis 00 :" + indexPrevDis + " i: " + i + " res1: " + res);
              continue;
          }
        }else if(indexPrevDis == 0 && indexNext === undefined &&  
          indexPrev === undefined && indexNextDis=== undefined){
          console.log("arr 33: " + arr);
          arr.shift();
          return arr;
      }
      }else{
          res.push(arr[i]);
      }
  }

}
  console.log("res: " + res);