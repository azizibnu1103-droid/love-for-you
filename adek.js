// ===============================
// ELEMENT
// ===============================
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const main = document.getElementById("main");
const music = document.getElementById("music");

// ===============================
// TEKS ROMANTIS PANJANG
// ===============================
const loveText = [
  "Jujur ya… aku tuh sering kepikiran, gimana ceritanya aku bisa seberuntung ini punya kamu.",
  "Di dunia yang ribut, capek, dan kadang bikin pusing, kamu tuh kayak tempat pulang yang paling tenang.",
  "Aku bersyukur banget bisa kenal kamu, bisa ngobrol sama kamu tiap hari.",
  "Bisa ketawa bareng walau halnya sepele, bahkan bisa ribut kecil terus baikan lagi.",
  "Kamu mungkin gak sadar, tapi kehadiran kamu itu ngaruh banget ke hidup aku.",
  "Cara kamu perhatian, cara kamu marah, bahkan cara kamu diem… semuanya berarti.",
  "Makasih ya udah bertahan sejauh ini.",
  "Makasih udah milih aku.",
  "Makasih juga udah sabar sama aku yang kadang nyebelin, egois, atau gak peka.",
  "Aku gak janji bakal sempurna.",
  "Tapi aku janji bakal selalu usaha.",
  "Usaha buat ngerti kamu.",
  "Usaha buat jagain kamu.",
  "Dan usaha buat tetep ada di samping kamu.",
  "Kalau suatu hari kamu capek, inget ya… kamu gak sendirian.",
  "Ada aku yang selalu siap dengerin.",
  "Tanpa nyela.",
  "Tanpa pergi.",
  "Dan kalau kamu nanya… aku sayang kamu atau engga.",
  "Jawabannya selalu sama:",
  "Iya.",
  "Dari dulu.",
  "Sekarang.",
  "Dan semoga seterusnya. 💗"
];

// ===============================
// BUTTON ENGGA → IYA MAKIN GEDE
// ===============================
let scale = 1;

noBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;
  yesBtn.style.zIndex = "10";
});

// ===============================
// BUTTON IYA
// ===============================
yesBtn.addEventListener("click", () => {
  music.play(); // lagu mulai

  main.innerHTML = "";
  const textBox = document.createElement("div");
  textBox.className = "love-text";
  main.appendChild(textBox);

  showText(textBox, 0);
});

// ===============================
// ANIMASI TEKS SATU-SATU
// ===============================
function showText(container, index) {
  if (index >= loveText.length) {
    showPhotos(container);
    return;
  }

  const p = document.createElement("p");
  p.textContent = loveText[index];
  p.classList.add("fade-in");
  container.appendChild(p);

  setTimeout(() => {
    showText(container, index + 1);
  }, 1600);
}

// ===============================
// FOTO + LIGHTBOX
// ===============================
function showPhotos(container) {
  const gallery = document.createElement("div");
  gallery.className = "final-gallery";

  lovePhotos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("photo-pop");
    gallery.appendChild(img);
  });

  container.appendChild(gallery);
  setupLightbox();
}

// ===============================
// LIGHTBOX (ZOOM FOTO)
// ===============================
function setupLightbox() {
  const images = document.querySelectorAll("img");
  const lightbox = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.onclick = () => {
      lightbox.style.display = "flex";
      lightImg.src = img.src;
    };
  });

  lightbox.onclick = () => {
    lightbox.style.display = "none";
  };
}

// ===============================
// HUJAN LOVE PINK
// ===============================
const rain = document.querySelector(".love-rain");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";

  rain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
