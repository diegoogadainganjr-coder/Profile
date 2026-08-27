// =========================
// LOADING SCREEN
// =========================

const loadingScreen = document.getElementById("loading");
const progressBar = document.getElementById("progress-bar");

let progress = 0;

const loadingInterval = setInterval(() => {
  progress += 5;

  if (progressBar) {
    progressBar.style.width = progress + "%";
  }

  if (progress >= 100) {
    clearInterval(loadingInterval);

    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add("fade-out");

        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 800);
      }
    }, 300);
  }
}, 100);


// =========================
// TYPING EFFECT
// =========================

const roles = [
  "ASPIRING FULL-STACK DEVELOPER",
  "UI/UX DESIGN STUDENT",
  "FRONTEND DEVELOPER",
  "WEB DEVELOPER IN TRAINING"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {
  if (!typing) return;

  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex][charIndex];
    charIndex++;

    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      typing.textContent = "";
      charIndex = 0;

      roleIndex = (roleIndex + 1) % roles.length;

      typeEffect();
    }, 1800);
  }
}

typeEffect();


// =========================
// FLOATING PARTICLES
// =========================

setInterval(() => {
  const particle = document.createElement("div");

  particle.className = "particle";

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.bottom = "0";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 8000);
}, 500);


// =========================
// SAFETY FALLBACK
// =========================
// If something prevents the normal loading
// animation from finishing, hide it after 5 seconds.

window.addEventListener("load", () => {
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add("fade-out");

      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 800);
    }
  }, 5000);
});