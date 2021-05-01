console.log("Soal Nomor 1");

function jumlah_kata(params){
    let first = params.split(" ").length
    console.log(first);
    
}

var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok"
var kalimat_2 = "Saya Iqbal"

jumlah_kata(kalimat_1)
jumlah_kata(kalimat_2)

console.log("Soal Nomor 2");
console.log("==================");
let tanggal = 12
let bulan = 2
let tahun = 2021
function  next_date(tanggal, bulan, tahun){
    let day = tanggal
    let month = bulan
    let year = tahun
    const date = new Date(`${month}-${day}-${year}`)
    date.setDate(date.getDate() + 1)
    let newDate = date.getDate()
    let newMonth = date.getMonth()
    let newYear = date.getFullYear()
    switch(newMonth){
        case 0:
            let januari = `${newDate} Januari ${newYear}`;
            console.log(januari);
            break;
        case 1:
            let februari = `${newDate} Februari ${newYear}`;
            console.log(februari);
            break;
        case 2:
            let maret = `${newDate} Maret ${newYear}`;
            console.log(maret);
            break;
        case 3:
            let april = `${newDate} April ${newYear}`;
            console.log(april);
            break;
        case 4:
            let mei = `${newDate} Mei ${newYear}`;
            console.log(mei);
            break;
        case 5:
            let juni = `${newDate} Juni ${newYear}`;
            console.log(juni);
            break;
        case 6:
            let juli = `${newDate} Juli ${newYear}`;
            console.log(juli);
            break;
        case 7:
            let agustus = `${newDate} Agustus ${newYear}`;
            console.log(agustus);
            break;
        case 8:
            let september = `${newDate} September ${newYear}`;
            console.log(september);
            break;
        case 9:
            let oktober = `${newDate} Oktober ${newYear}`;
            console.log(oktober);
            break;
        case 10:
            let november = `${newDate} November ${newYear}`;
            console.log(november);
            break;
        case 11:
            let desember = `${newDate} Desember ${newYear}`;
            console.log(desember);
        break;
    }
}
next_date(tanggal, bulan, tahun)



