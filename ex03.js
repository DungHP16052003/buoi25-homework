let mystr = new String("alo");
console.log(mystr);
console.log(typeof mystr);


function BOOK(title, author, year ){
    this.title = title;
    this.author = author;
    this.year = year;
};
const myBOOK = new BOOK("HOC JS KHONG KHO", "HOANGNM", 2025);
console.log(myBOOK);