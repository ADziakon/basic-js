const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
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
    console.log('test55 ' + indexPrevDis);
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
                console.log("indexPrevDis 00 :" + indexPrevDis + " i: " + i + " res1: " + res);
                //arr.shift(); 
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
}

module.exports = {
  transform
};
