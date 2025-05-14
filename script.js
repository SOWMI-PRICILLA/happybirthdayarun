// Typed.js setup
window.onload = function () {

  const heroAudio = document.getElementById("heroAudio");

  // Gently play audio with low volume
  function playHeroAudio() {
    heroAudio.volume = 0.2; // soft background
    heroAudio.play().catch((err) => {
      console.log("Autoplay may be blocked by the browser:", err);
    });
  }


  
  new Typed("#typed", {
    strings: [
      `Some souls carry storms, yet shine like sunlight. 💫<br>
      Bro!…you are one of them 💎❤️<br>
      On your birthday, I wish you not just happiness,<br>
      but the kind of peace that fills a quiet morning! ☁️<br>
      the kind of strength that doesn’t shout,<br>
      and the kind of love that stays! 💞<br>
      from those who truly see your worth. 💗<br>
      The world is brighter with<br>
      your courage, your kindness, and your heart in it. ✨<br>
      Happy Birthday to someone who deserves a love that heals, 🫶<br>
      after all that tried to break you! 💖`
    ],
    typeSpeed: 50,
    showCursor: false,
    onBegin: playHeroAudio
  });
};

// Animate on scroll using ScrollReveal
ScrollReveal().reveal('.section', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  interval: 200,
  reset: false
});

// Floating Heart & Cake Animation (Global)
function createFloatingIcons() {
  const container = document.getElementById('floating-icons-container');
  const icons = ['❤️', '🎂', '💖', '💗'];

  for (let i = 0; i < 15; i++) {
    const icon = document.createElement('div');
    icon.classList.add('floating-icon');
    icon.innerText = icons[Math.floor(Math.random() * icons.length)];

    // Random position and delay
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.top = Math.random() * 100 + 'vh';
    icon.style.animationDelay = Math.random() * 20 + 's';

    container.appendChild(icon);
  }
}

window.onload = () => {
  createFloatingIcons();
};

// Open Lightbox when image clicked
document.getElementById("specialImage").onclick = function () {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "block";
  lightboxImg.src = this.src;
};

// Close Lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


// Fade-in gallery images on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".gallery img").forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.classList.add("fade-in");
    }
  });
});
