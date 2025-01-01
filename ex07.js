function User(name, email, address){
    this.name = name;
    this.email = email;
    this.address = address;

    this.hello1 = function(){
        console.log(`Xin chào, mình tên là ${name} mình đến từ ${address}`)
    };
}
 User.prototype.hello2 = function(){
    console.log(`Xin chào, mình tên là ${this.name} mình đến từ ${this.address}`)
 }

 const Hoang = new User("hoang nguyen", "hoang@gmail.com", "bac giang");
console.log(Object.getPrototypeOf(Hoang));

console.log(Hoang.hasOwnProperty("email"))
console.log(Hoang.hasOwnProperty("hello1"))
console.log(Hoang.hasOwnProperty("hello2"))