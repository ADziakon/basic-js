let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
let arrNew = [];
for(let i=0;i<arr.length;i++){
  if(arr[i] != -1){
    arrNew.push(arr[i]);
    arr[i] = '';
  }
}
console.log("arr: " + arr);
console.log("arrNew: " + arrNew);
arrNew.sort();
console.log("arrNew: " + arrNew);
for(let i=0;i<arr.length;i++){
  if(arr[i] == ''){
    arr[i] = arrNew[0];
    arrNew.pop();
  }
}
return arr;