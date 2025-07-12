const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-07-20T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `🎈 ${days}d ${hours}h ${minutes}m ${seconds}s left`;

  if (distance < 0) {
    countdown.innerHTML = "🎉 It's Birthday Time!";
  }
}, 1000);
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
