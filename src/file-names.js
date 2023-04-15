const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  let count;
  let countStr;
  for(let i=0;i<names.length;i++){
    console.log("if: " + names.includes(names[i]));
    if(names.includes(names[i])){
      countStr = names[i].slice(names[i].length-4, names[i].length-1);
      count = countStr[1] +1;
      newName = names[i]+"(" + count + ")";
      console.log("newName: " + newName)
      newArr.push()
    }else{
      newArr.push(names[i]);
    }
  }
  
}

module.exports = {
  renameFiles
};
