// 🌙 DARK MODE TOGGLE
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

// 📄 DOWNLOAD / PRINT CV
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
  window.print();
});

// 📅 AUTO YEAR IN FOOTER
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
