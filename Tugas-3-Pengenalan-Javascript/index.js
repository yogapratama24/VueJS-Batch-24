console.log("Soal Nomor 1");
let pertama = "saya sangat senang hari ini";
let kedua = "belajar javascript itu keren";
let array = pertama.split(" ").slice(0, 3).join(" ")
let concat1 = kedua.substr(0,7)
let concat2 = kedua.substring(8,18).toUpperCase()
console.log(array.concat(" ",concat1).concat(" ", concat2));

console.log("==========");
console.log("Soal Nomor 2");
// let kataPertama = parseInt("10");
// let kataKedua = parseInt("2");
// let kataKetiga = parseInt("4");
// let kataKeempat = parseInt("6");
// let result = (kataKedua * kataKetiga) + (kataPertama + kataKeempat)
// console.log(result);

console.log("==========");
console.log("Soal Nomor 3");
let kalimat = 'wah javascript itu keren sekali'; 

let kataPertama = kalimat.substring(0, 3); 
let kataKedua = kalimat.substring(4, 14);
let kataKetiga = kalimat.substring(15, 18);
let kataKeempat = kalimat.substring(19, 24);
let kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
