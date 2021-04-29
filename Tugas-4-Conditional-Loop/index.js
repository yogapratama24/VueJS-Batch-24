console.log("Soal Nomor 1");
let nilai = 85
if(nilai >= 85){
    console.log("indeksnya A")
}else if(nilai >= 75 && nilai < 85 ){
    console.log("indeksnya B")
}else if(nilai >= 65 && nilai < 75){
    console.log("indeksnya C")
}else if(nilai >= 55 && nilai < 65){
    console.log("indeksnya D")
}else if(nilai < 55){
    console.log("indeksnya E")
}

console.log("=========");
console.log("Soal Nomor 2");
let tanggal = 12;
let bulan = 2;
let tahun = 1999;

switch(bulan){
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
    break;
}

console.log("=========");
console.log("Soal Nomor 3");

let n = 3
for(let i = 1; i <= n; i++){
    let hashtag = '';
    for(let j = 1; j <= i ; j++){
        hashtag += '#'
    }
    console.log(hashtag);
}

console.log("=========");
console.log("Soal Nomor 4");

let m = 10

for(let i = 1; i <= m; i++){
    let number = ''
    number += i + ' -'
    if(i == 1 || i == 4 || i == 7 || i == 10 ){
        number += " I Love Programming" + "\n\=====" 
    }else if(i == 2 || i == 5 || i == 8){
        number += " I Love Javascript" + "\n\=====" 
    }else if(i % 3 == 0){
        number += " I Love Vue JS" + "\n\=====" 
    }
    console.log(number)
}
