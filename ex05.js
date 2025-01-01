function User(name, email, address){
    this.name = name;
    this.email = email;
    this.address = address;

    this.hello() = function(){
        console.log(`Xin chào, mình tên là ${name} mình đến từ ${address}`)
    };
}

User.prototype.getInfor = function(){
    console.log(`name: ${this.name}, email:${this.email}, address:${this.address}`)
}
const Hoang = new User("hoang nguyen", "hoang@gmail.com", "bac giang");
Hoang.hello();
Hoang.getInfor();

/**
 * Dùng prototype khi nào:
 * - khi muốn tạo ra những phương thức, thuộc tính dùng chung   
 * - dễ dàng kiểm soát hàng loạt
 * - tối ưu bộ nhớ
 * 
 * khai báo phương thức, thuộc tính trong hàm tạo trong constructor khi nào: 
 * - dùng khi muốn tách biệt các đối tượng tạo ra
 * - 
 */