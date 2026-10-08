
let nilaiTugas = 80;
let nilaiUTS = 75;
let nilaiUAS = 90;

let nilaiAkhir = (nilaiTugas * 30 / 100) +
                 (nilaiUTS * 30 / 100) +
                 (nilaiUAS * 40 / 100);

let keterangan;

if (nilaiAkhir >= 75) {
    keterangan = "LULUS";
} else {
    keterangan = "TIDAK LULUS";
}

document.getElementById("nilaiAkhir").innerHTML =
    "Nilai Akhir = " + nilaiAkhir;

document.getElementById("keterangan").innerHTML =
    "Keterangan = " + keterangan;

console.log("=== PROGRAM NILAI AKHIR SISWA ===");
console.log("Nilai Tugas = " + nilaiTugas);
console.log("Nilai UTS = " + nilaiUTS);
console.log("Nilai UAS = " + nilaiUAS);
console.log("Nilai Akhir = " + nilaiAkhir);
console.log("Keterangan = " + keterangan);