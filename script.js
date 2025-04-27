const characters = [
  {
    name: "Beru",
    image: "https://raw.githubusercontent.com/IANFOX-King/Siluet-anime/Images/BERU.png",
    fullImage: "https://images.app.goo.gl/MUSF3PkVuS9Lz2A26"
  }
  // Mau nambah karakter lain tinggal tambah disini ya
];

let currentIndex = 0;
let score = 0;
let sudahJawab = false;

const img = document.getElementById("characterImage");
const input = document.getElementById("jawaban");
const result = document.getElementById("hasil");
const skorTeks = document.getElementById("skor");
const pertanyaan = document.getElementById("pertanyaan");
const submit = document.getElementById("submit");
const next = document.getElementById("next");

function tampilkanKarakter() {
  const karakter = characters[currentIndex];
  img.src = karakter.image;
  input.value = "";
  result.textContent = "";
  submit.disabled = false;
  sudahJawab = false;
  pertanyaan.textContent = `Pertanyaan: ${currentIndex + 1}/${characters.length}`;
}

submit.addEventListener("click", () => {
  if (sudahJawab) return;

  const jawaban = input.value.trim().toLowerCase();
  const benar = characters[currentIndex].name.toLowerCase();

  if (jawaban === benar) {
    score++;
    result.textContent = "Benar!";
  } else {
    result.textContent = `Salah! Jawaban: ${characters[currentIndex].name}`;
  }
  skorTeks.textContent = `Skor: ${score}`;

  const karakter = characters[currentIndex];
  img.src = karakter.fullImage;

  // Kasih animasi fade-in
  img.classList.remove("fade-in");
  void img.offsetWidth; // Reset animasi
  img.classList.add("fade-in");

  submit.disabled = true;
  sudahJawab = true;
});

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= characters.length) {
    alert(`Game selesai! Skor akhir: ${score}/${characters.length}`);
    currentIndex = 0;
    score = 0;
    skorTeks.textContent = "Skor: 0";
  }
  tampilkanKarakter();
});

tampilkanKarakter();
