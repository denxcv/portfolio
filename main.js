// Live Portugal (Lisbon) time in the footer
function updatePortugalTime() {
  const timeEl = document.getElementById('pt-time');
  if (!timeEl) return;

  const now = new Date();
  const formatted = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Lisbon',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);

  timeEl.textContent = `GMT ${formatted}`;
}

updatePortugalTime();
setInterval(updatePortugalTime, 30000);


// Анімація маркерного підкреслення при скролі
document.addEventListener('DOMContentLoaded', () => {
  const highlights = document.querySelectorAll('.scroll-highlight');

  // Налаштовуємо спостерігач (спрацює, коли текст на 50% з'явиться на екрані)
  const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Якщо хочеш, щоб анімація програвалася лише один раз, розкоментуй рядок нижче:
        // highlightObserver.unobserve(entry.target); 
      } else {
        // Закоментуй рядок нижче, якщо НЕ хочеш, щоб підкреслення зникало при скролі вгору
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.5, rootMargin: "0px 0px -100px 0px" });

  highlights.forEach(highlight => {
    highlightObserver.observe(highlight);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо всі елементи, які мають виринати
  const revealElements = document.querySelectorAll('.reveal-up');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Зупиняємо спостереження, щоб анімація програлась лише 1 раз
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: "0px" });
  
  revealElements.forEach(el => revealObserver.observe(el));
});