// ============================================
// MODÁLOK & LOGIN-REGISZTRÁCIÓS KEZELÉS
// ============================================

const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("profile-icon")?.addEventListener("click", () => {
  loginModal.classList.add("flex");
});

document.getElementById("toRegister")?.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.remove("flex");
  registerModal.classList.add("flex");
});

document.getElementById("toLogin")?.addEventListener("click", (e) => {
  e.preventDefault();
  registerModal.classList.remove("flex");
  loginModal.classList.add("flex");
});

[loginModal, registerModal].forEach(modal => {
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("flex");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    loginModal.classList.remove("flex");
    registerModal.classList.remove("flex");
  }
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector(".email-input").value.trim();
  const password = e.target.querySelector(".password-input").value.trim();
  const feedback = document.getElementById("loginFeedback");

  if (!email || !password) {
    feedback.textContent = "Kérlek, töltsd ki az összes mezőt.";
  } else {
    feedback.textContent = "Sikeres bejelentkezés (demo).";
  }
});

document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll("input");
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const password = inputs[2].value.trim();
  const confirm = inputs[3].value.trim();
  const feedback = document.getElementById("registerFeedback");

  if (!name || !email || !password || !confirm) {
    feedback.textContent = "Minden mező kitöltése kötelező.";
  } else if (password !== confirm) {
    feedback.textContent = "A jelszavak nem egyeznek.";
  } else {
    feedback.textContent = "Sikeres regisztráció (demo).";
  }
});

// ============================================
// FEJLÉC ÖSSZEHÚZÁSA GÖRGETÉSKOR
// ============================================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ============================================
// OLDALSÓ MENÜ & OVERLAY KEZELÉS
// ============================================

const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

menuToggle?.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay?.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  menuToggle.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});

// ============================================
// SZEKCIÓ DOBOZOK KATTINTÁSRA OLDALRA UGRÁS
// ============================================
document.querySelectorAll(".section-box").forEach(box => {
  box.addEventListener("click", () => {
    const url = box.getAttribute("data-link");
    if (url) {
      window.location.href = url;
    } else {
      console.warn("Nincs data-link attribútum az elemhez.");
    }
  });
});




window.addEventListener("DOMContentLoaded", loadDailyContent);
