/*
      while(kondisi){
      aksi
      }
      selama kondisi bernilai true, lakukan aksi dalam blok{}
      */

/*contoh
      let ulang = true;
      while (ulang) {
        console.log("hello world");
        ulang = confirm("lagi?");
      }*/

/*contoh lain
    while(kondisi terminasi) {
        aksi
        increment / decrement
    }*/

// let nilaiAwal = 1;
// while (nilaiAwal <= 5) {
//   console.log("hello " + nilaiAwal + "x");
//   nilaiAwal++;
// }

let angkotNo = 1;
let jmlhAngkot = 10;
while (angkotNo <= jmlhAngkot) {
  console.log("Angkot No. " + angkotNo + " beroperasi dengan baik");
  angkotNo++;
}
