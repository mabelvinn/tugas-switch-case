let hari = new Date().getDay();
let hariNama = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

console.log(`Hari ini: ${hariNama[hari]}`);
console.log("Cek status plat nomor:\n");

function randomArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buatPlat() {
  const kodeDepan = ["B", "D", "F", "AB", "AD"];
  const kodeAkhir = ["CD", "XY", "JK", "MN", "AZ"];

  let angka = Math.floor(Math.random() * 9000) + 1000;
  let hurufDepan = randomArr(kodeDepan);
  let hurufAkhir = randomArr(kodeAkhir);

  return {
    plat: `${hurufDepan} ${angka} ${hurufAkhir}`,
    angkaTerakhir: angka % 10
  };
}

function cekTilang(angkaTerakhir, hari) {
  switch (hari) {
    case 1: case 3: case 5:
      return angkaTerakhir % 2 === 0
        ? "Kena tilang! Hari ini khusus plat ganjil."
        : "Aman! Plat ganjil boleh lewat.";
    case 2: case 4: case 6:
      return angkaTerakhir % 2 !== 0
        ? "Kena tilang! Hari ini khusus plat genap."
        : "Aman! Plat genap boleh lewat.";
    case 0:
      return "Hari Minggu bebas! Semua plat boleh lewat.";
    default:
      return "Error hari.";
  }
}


for (let i = 0; i < 4; i++) {
  let { plat, angkaTerakhir } = buatPlat();
  let status = cekTilang(angkaTerakhir, hari);
  console.log(`${plat} -> ${status}`);
}