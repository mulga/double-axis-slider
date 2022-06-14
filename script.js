let crouselInner = document.getElementById("crouselInner");
let slides = document.querySelectorAll(".slide");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let index = 0;

// horizontal scrolling

function horizontal() {
  if (index > slides.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  crouselInner.style.transform = `translateX(${-index * 1440}px)`;
}

console.log(slides);

prevBtn.addEventListener("click", () => {
  index--;
  horizontal();
});

nextBtn.addEventListener("click", () => {
  index++;
  horizontal();
});

// vertical scrolling

function vertical() {
  if (index > slides.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  crouselInner.style.flexDirection = `column`;
  crouselInner.style.transform = `translateY(${-index * 700}px)`;
}

console.log(slides);

upBtn.addEventListener("click", () => {
  index++;
  vertical();
});

downBtn.addEventListener("click", () => {
  index--;
  vertical();
});

let interval = setInterval(automatic, 3000);

function automatic() {
  index++;
  horizontal();
}

// POPUP

let formOverlay = document.getElementById("formOverlay");
let close = document.getElementById("close");

close.addEventListener("click", () => {
  formOverlay.style.display = "none";
});
