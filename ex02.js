const fruits = ["apple", "banana", "orange", , , , , "kiwi", "orange", "apple", "kiwi", "apple"];


let fruitsCount = fruits.reduce((acc, cur) => {
   console.log(acc);
 // kiem tra xem acc co ton tai key = cur hay khong
   if(!acc[cur]){
    acc[cur] = 0;
   }
   // neu acc da ton tai key = cur 
   acc[cur] ++;
   return acc;
},{});
console.log(fruitsCount);