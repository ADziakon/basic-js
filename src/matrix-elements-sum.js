const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum=0;
let indexZero='', indexCurr='';
let arrayZero=[];
console.log("matrix: " + matrix);
for(let i=0;i<matrix.length;i++){
  for(let j=0; j<matrix[i].length;j++){
    
    if(matrix[i][j] == 0){
        indexZero= i +','+j;
        arrayZero.push(indexZero);
        console.log('indexZero ' + indexZero);
    }
      
  }
}

for(let i=0;i<matrix.length;i++){
    for(let j=0; j<matrix[i].length;j++){
      //console.log("indexZero: " + indexZero);
      if(i>0){
        indexCurr = (i-1) +','+j;
        console.log("indexCurr: " + indexCurr);
        if(arrayZero.includes(indexCurr)){
            console.log("arrayZero.includes(indexZero): " + arrayZero.includes(indexCurr))
          }else{
            sum += matrix[i][j];
            console.log("test1 matrix[i][j]: " + matrix[i][j]);
          }
      }else{
        sum += matrix[i][j];
        console.log("test2 matrix[i][j]: " + matrix[i][j]);
      }

    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
