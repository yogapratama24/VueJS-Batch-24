console.log("Soal Nomor 1");
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();
for(result of daftarHewan){
    console.log(result);
}

console.log("Soal Nomor 2");
console.log("==============");
function introduce(data){
    let show = `Nama saya ${data.name}, umur saya ${data.age} tahun, alamat saya di ${data.address}, dan saya punya hobby yaitu ${data.hobby}`
    return show
}
let data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
let perkenalan = introduce(data)
console.log(perkenalan);

console.log("Soal Nomor 3");
console.log("==============");

function hitung_huruf_vokal(hitung){
    let data = hitung.toLowerCase()
    let vokal = ['a', 'i', 'u', 'e', 'o'];
    let input = [];
    for(result of data){
        let find= vokal.indexOf(result)
        if(find >= 0){
            input.push(find)
        }
    }
    return input.length
}

let hitung_1 = hitung_huruf_vokal("Muhammad")
let hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1, hitung_2);

console.log("Soal Nomor 4");
console.log("==============");

function hitung(data){
    return (2 + ((data - 2)*2))
}

console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) )
console.log( hitung(5) )