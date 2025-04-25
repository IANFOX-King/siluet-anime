const characters = [
  {
    name: "Beru",
    image: "https://raw.githubusercontent.com/IANFOX-King/siluet-anime/main/images/BERU.png"
  }
];

let currentIndex = 0;
let skor = 0;

function tampilkanKarakter() {
  const karakter = characters[currentIndex];
  document.getElementById("imgSiluet").src = karakter.image;
  document.getElementById("pertanyaan").textContent = `Pertanyaan: ${currentIndex + 1}/${characters.length}`;
}

function cekJawaban() {
  const input = document.getElementById("jawaban").value.trim().toLowerCase();
  const jawabanBenar = characters[currentIndex].name.toLowerCase();

  if (input === jawabanBenar) {
    skor++;
    document.getElementById("hasil").textContent = "Benar, Tuan Ian!";
  } else {
    document.getElementById("hasil").textContent = `Salah! Jawaban: ${characters[currentIndex].name}`;
  }

  document.getElementById("skor").textContent = `Skor: ${skor}`;
}

function nextKarakter() {
  currentIndex++;
  if (currentIndex >= characters.length) {
    alert(`Permainan selesai! Skor akhir Tuan Ian: ${skor}`);
    currentIndex = 0;
    skor = 0;
    document.getElementById("skor").textContent = "Skor: 0";
    document.getElementById("hasil").textContent = "";
  }
  document.getElementById("jawaban").value = "";
  tampilkanKarakter();
}

// Event listener tombol
document.getElementById("submit").addEventListener("click", cekJawaban);
document.getElementById("next").addEventListener("click", nextKarakter);

// Tampilkan karakter pertama
tampilkanKarakter();
