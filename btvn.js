/**
 * Add a custom filter2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.filter
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Array} - A new array with all elements that pass the test implemented by the callback.
 */
Array.prototype.filter2 = function(callback, thisArg) {
     const result = [];
     for(let i = 0; i< this.length; i++){
        if(i in this){
            const check = this[i];
            if(callback.call(thisArg, this[i], i,this)){
                result.push(check)
            }
        }
     }
     return result;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
    return value % 2 !== 0;
});

console.log(result); // [1, 3, 5]

// bai 2
/**
 * Add a custom map2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.map
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Array} - A new array with each element being the result of the callback function.
 */
Array.prototype.map2 = function (callback, thisArg) {
    const result = [];
     for(let i = 0; i < this.length; i++){
        if(i in this){
            const check1 = this[i];
              result[i] = callback.call(thisArg, this[i], i, this);
            }
        }
        return result;
     }
  

// Sample usage

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1); // [2, 4, 6, 8, 10]
console.log(result1.length); // 5

// Sample 2
const arr2 = [1, , , , 5]; // Có phần tử trống
const result2 = arr2.map2((value) => value * 2);

console.log(result2); // [2, empty, empty, empty, 10]
console.log(result2.length); // 5
// bài 3
/**
 * Add a custom reduce2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.reduce
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [initialValue] - Optional. Value to use as the first argument to the first call of the callback.
 * @returns {any} - The value that results from the reduction.
 */

/**
 * Thêm phương thức reduce2 vào Array.prototype
 * Phương thức này mô phỏng hành vi của Array.prototype.reduce
 * @param {function} callback - Hàm được gọi cho mỗi phần tử trong mảng.
 * @param {any} [initialValue] - Giá trị khởi tạo (không bắt buộc).
 * @returns {any} - Kết quả sau khi tính toán.
 */

Array.prototype.reduce2 = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback phải là một hàm"); 
    }
  
    let accumulator = initialValue; 
    let startIndex = 0; 
  
    if (initialValue === undefined) {
      while (startIndex < this.length && !(startIndex in this)) {
        startIndex++;
      }
        if (startIndex >= this.length) {
        throw new TypeError("Không thể reduce mảng rỗng mà không có giá trị khởi tạo");
      }
  
      accumulator = this[startIndex];
      startIndex++;
    }
  
    // Lặp qua mảng
    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
// Sample usage

// Sample 1

const arr3 = [1, 2, 3, 4, 5];
const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(result3); // 15

// Sample 2
const arr4 = [];
try {
  const result4 = arr4.reduce2((accumulator, value) => {
    return accumulator + value;
  });
  console.log(result4);
} catch (error) {
  console.error(error.message); // Error: Reduce of empty array with no initial value
}

// Sample 3
const arr5 = [];
const result5 = arr5.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(result5); // 0