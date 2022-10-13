const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  reg = /[A-Za-z]*/;
  let str ='';
    if (members != null) {
      for (i = 0; i<members.length; i++){  
        if (typeof members[i] != "string" ) {
          continue;  
        }
        if ((members[i]).match(reg)){ 
          str +=members[i].trim()[0];
        }
      }

    }else {
      return false;
    }

  str = str.toUpperCase();
  return str.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
