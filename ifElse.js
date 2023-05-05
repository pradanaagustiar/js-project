// let angka = "abs";
// if (angka % 2 == 0) {
//   console.log(angka + " bilangan genap");
// } else if (angka % 2 == 1) {
//   console.log(angka + " bilangan ganjil");
// } else {
//   console.log("bukan angka");
// }

let angkotNo = 1;
let jmlhAngkot = 10;

for (let angkotNo = 1; angkotNo <= jmlhAngkot; angkotNo++) {
  if (angkotNo <= 6 && angkotNo !== 5) {
    console.log("Angkot No. " + angkotNo + " beroperasi dengan baik");
  } else if (angkotNo === 8 || angkotNo === 10 || angkotNo === 5) {
    console.log("Angkot No. " + angkotNo + " sedang rusak");
  } else {
    console.log("Angkot No. " + angkotNo + " sedang tdk beroperasi");
  }
}
