console.log("Soal Nomor 1");

const hitung = () => {
    let lebar = 2
	let panjang = 3
	let luas = panjang * lebar;
	let keliling = 2 * (panjang + lebar);
    const obj = {luas, keliling}
    console.log(obj);
}
hitung()


console.log("=================");
console.log("Soal Nomor 2");

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: function(){
            console.log(firstName + " " + lastName)
        }
    }
}
newFunction("William", "Imoh").fullName()


console.log("=================");
console.log("Soal Nomor 3");

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}
const {firstName, lastName, address, hobby} = newObject
console.log(firstName, lastName, address, hobby)

console.log("=================");
console.log("Soal Nomor 4");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

console.log("=================");
console.log("Soal Nomor 5");
const planet = "earth" 
const view = "glass" 
const before = `Lorem ${view} dolor sit amet consectetur adipiscing elit ${planet}`
console.log(before);
