db = new Mongo().getDB("mydatabase");

db.students.insertMany([
    { studentCode: "n035", firstName: "chatlada", lastName: "wongkanyon", age: 20, email: "ngaija2547@gmail.com" },
    { studentCode: "n035", firstName: "ncchat", lastName: "wiwiwi", age: 20, email: "oioioi@gmail.com"},
    { studentCode: "n035", firstName: "ngai", lastName: "hahahah", age: 21, email: "eieieiei@gmail.com" },
    { studentCode: "n035", firstName: "chatwang", lastName: "dadada", age: 22, email: "iooo@gmail.com" },
    { studentCode: "n035", firstName: "ngaija", lastName: "eieiei", age: 23, email: "poiorud@gmail.com" }
]);
