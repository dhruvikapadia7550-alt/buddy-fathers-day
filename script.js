// ===============================
// Loader Messages
// ===============================

const loader = document.getElementById("loader");
const loadingText = document.getElementById("loading-text");

const messages = [
    "Every family has a story...",
    "Ours changed the day you came...",
    "Some journeys are worth waiting for...",
    "Happy Father's Day Buddy ❤️"
];

let index = 0;

// Show first message
loadingText.innerHTML = messages[0];

const interval = setInterval(() => {

    loadingText.style.opacity = "0";

    setTimeout(() => {

        index++;

        if (index < messages.length) {

            loadingText.innerHTML = messages[index];
            loadingText.style.opacity = "1";

        }

    }, 500);

}, 4000);


// ===============================
// Hide Loader
// ===============================

setTimeout(() => {

    clearInterval(interval);

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 1500);

}, 16000);


// ===============================
// Music
// ===============================

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

if (music && btn) {

    let playing = false;

    btn.onclick = () => {

        if (!playing) {

            music.play();
            btn.innerHTML = "⏸";
            btn.classList.add("music-playing");

        } else {

            music.pause();
            btn.innerHTML = "🎵";
            btn.classList.remove("music-playing");

        }

        playing = !playing;

    };

}
/* ==========================
      Floating Hearts
========================== */
/* ==========================
      Floating Hearts
========================== */

const heartContainer = document.getElementById("hearts-container");

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = "25px";
    heart.style.zIndex = "99999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);

}, 500);