let Nilai = [
  { Nama: "Jeno", grade: "A" },
  { Nama: "Mingyu", grade: "B" },
  { Nama: "Karina", grade: "C" },
  { Nama: "Carmet", grade: "D" }
];

Nilai.forEach(function(item) {
  switch (item.grade.toUpperCase()) {
    case "A":
      console.log(`Grade A: Nilai Sangat Baik (${item.Nama})`);
      break;
    case "B":
      console.log(`Grade B: Nilai Baik (${item.Nama})`);
      break;
    case "C":
      console.log(`Grade C: Nilai Kurang Baik (${item.Nama})`);
      break;
    case "D":
      console.log(`Grade D: Nilai Buruk (${item.Nama})`);
      break;
    default:
      console.log(`Grade ${item.grade}: Tidak Valid (${item.Nama})`);
      break;
  }
});
