const characters = [
  {
    name: "abyss diablo",
    image: "https://i.ibb.co/SvzKXYw/siluet-abyss.jpg"
  }
];

let currentIndex = 0;
let score = 0;

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
  pertanyaan.textContent = `Pertanyaan: ${currentIndex + 1}/${characters.length}`;
}

submit.addEventListener("click", () => {
  const jawaban = input.value.trim().toLowerCase();
  const benar = characters[currentIndex].name.toLowerCase();
  if (jawaban === benar) {
    score++;
    result.textContent = "Benar!";
  } else {
    result.textContent = `Salah! Jawaban: ${characters[currentIndex].name}`;
  }
  skorTeks.textContent = `Skor: ${score}`;
  submit.disabled = true;
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
