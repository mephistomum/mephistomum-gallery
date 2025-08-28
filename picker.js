// Preload images into memory
const preloadedImages = {};
let currentPickerFilter = "ALL";

function preloadImages() {
  let preloadList = imageList.filter(img => !img.filename.startsWith("CANVA"));
  preloadList.forEach(img => {
    const image = new Image();
    image.src = "assets/images/" + img.filename;
    preloadedImages[img.filename] = image;
  });
}
preloadImages();

function setPickerFilter(filter, btn) {
      // remove placeholder when user clicks a button
  const placeholder = document.getElementById("placeholderMessage");
  if (placeholder) {
    placeholder.remove();
  }
  
  currentPickerFilter = filter;

  // Reset all buttons
  document.querySelectorAll(".picker-btn").forEach(b => {
    b.classList.remove("bg-white", "text-[#4b372a]", "border", "border-[#4b372a]");
    b.classList.add("bg-[#4b372a]", "text-white");
  });

  // Highlight the clicked one (swap colors)
  btn.classList.remove("bg-[#4b372a]", "text-white");
  btn.classList.add("bg-white", "text-[#4b372a]", "border", "border-[#4b372a]");

  hidePicked();
  startShuffle();
}


function goToRandomPicker() {
  document.getElementById("gallery").classList.add("hidden");
  document.getElementById("randomPickerGame").classList.remove("hidden");

  hidePicked(); // reset overlay
//   startShuffle();
}

function startShuffle() {
  const shuffleArea = document.getElementById("shuffleArea");
  shuffleArea.innerHTML = "";

  const imgEl = document.createElement("img");
  imgEl.className = "w-full h-full object-contain rounded-xl shadow-lg";
  shuffleArea.appendChild(imgEl);

  // ✅ filter by currentPickerFilter
  let cards = imageList.filter(img => {
    if (img.filename.startsWith("CANVA")) return false;
    if (currentPickerFilter === "ALL") return true;
    return img.filename.toUpperCase().startsWith(currentPickerFilter.toUpperCase());
  });

  // fallback if no cards found
  if (cards.length === 0) {
    cards = imageList.filter(img => !img.filename.startsWith("CANVA"));
  }

  cards = cards.sort(() => 0.5 - Math.random()).slice(0, 20);

  let i = 0;
  const shuffleInterval = setInterval(() => {
    const current = cards[i % cards.length];
    imgEl.src = preloadedImages[current.filename].src;
    i++;
  }, 100);

  setTimeout(() => {
    clearInterval(shuffleInterval);

    const picked = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById("pickedImage").src = preloadedImages[picked.filename].src;
    document.getElementById("pickedCard").classList.remove("hidden");
  }, 2000);
}


// Close overlay
document.getElementById("closePicked").addEventListener("click", hidePicked);

function hidePicked() {
  document.getElementById("pickedCard").classList.add("hidden");
}

// Reshuffle button
document.getElementById("reshuffleBtn").addEventListener("click", () => {
  hidePicked();   // hide overlay if open
  startShuffle(); // go through shuffle again
});