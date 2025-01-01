/**
 * Thêm phương thức reduce2 vào Array.prototype
 * Phương thức này mô phỏng hành vi của Array.prototype.reduce
 * @param {function} callback - Hàm được gọi cho mỗi phần tử trong mảng.
 * @param {any} [initialValue] - Giá trị khởi tạo (không bắt buộc).
 * @returns {any} - Kết quả sau khi tính toán.
 */

Array.prototype.reduce2 = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback phải là một hàm"); // Báo lỗi nếu callback không phải là hàm
    }
  
    let accumulator = initialValue; // Giá trị tích lũy
    let startIndex = 0; // Vị trí bắt đầu lặp qua mảng
  
    // Nếu không có initialValue, sử dụng phần tử đầu tiên của mảng làm giá trị khởi tạo
    if (initialValue === undefined) {
      // Bỏ qua các phần tử trống (empty elements)
      while (startIndex < this.length && !(startIndex in this)) {
        startIndex++;
      }
  
      // Nếu mảng rỗng và không có giá trị khởi tạo, ném lỗi
      if (startIndex >= this.length) {
        throw new TypeError("Không thể reduce mảng rỗng mà không có giá trị khởi tạo");
      }
  
      // Gán phần tử đầu tiên của mảng làm giá trị tích lũy
      accumulator = this[startIndex];
      startIndex++;
    }
  
    // Lặp qua mảng
    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
  
    // Trả về giá trị tích lũy cuối cùng
    return accumulator;
  };
  
  // Sử dụng thử
  
  // Ví dụ 1: Tính tổng
  const arr1 = [1, 2, 3, 4, 5];
  const result1 = arr1.reduce2((tichLuy, giaTri) => {
    return tichLuy + giaTri;
  }, 0);
  console.log(result1); // Kết quả: 15
  
  // Ví dụ 2: Mảng rỗng không có giá trị khởi tạo
  const arr2 = [];
  try {
    const result2 = arr2.reduce2((tichLuy, giaTri) => {
      return tichLuy + giaTri;
    });
    console.log(result2);
  } catch (error) {
    console.error(error.message); // Kết quả: "Không thể reduce mảng rỗng mà không có giá trị khởi tạo"
  }
  
  // Ví dụ 3: Mảng rỗng có giá trị khởi tạo
  const arr3 = [];
  const result3 = arr3.reduce2((tichLuy, giaTri) => {
    return tichLuy + giaTri;
  }, 0);
  console.log(result3); // Kết quả: 0
  