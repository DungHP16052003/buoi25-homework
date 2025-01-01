const arr1 = [1,2,3,4,5];
let total = 0;
for(let i=0; i<arr1.length; i++){
    total = total + arr1[i];
}
console.log(total);


let total2 = arr1.reduce((accumulator, currentValue, index, arr) =>{
   console.log(`accumulator: ${accumulator}`);
   console.log(`currentValue: ${currentValue}`);
   console.log(`index: ${index}`);
   console.log(`arr: ${arr}`);
   accumulator += currentValue;
   return accumulator;
}, 100);
console.log(total2);


// cho mang la so nguyen duong, tinh tich cac phan tu la so nguyen to trong mang

const arr2 = [2,3,4,6,7,8,9,11];
function checkPrime(n){
  for(let i=2; i<Math.sqrt(n); i++){
    if(n % i === 0)
        return false;
  return true;
  }
  
}

let result = arr2.reduce((acc, cur) => {
    if(checkPrime(cur)){
        acc *= cur;
  
    }
    return acc;
}, 1);
console.log(result);;

