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
let n = 91;
let str = '';
str = n.toString();

let res;
let sum = 0;
console.log(str );

    for(let i = 0; i<str.length;i++){
        sum += Number(str[i]);
        //console.log(sum);
      }
    
console.log(res);