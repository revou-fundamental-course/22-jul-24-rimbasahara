const hubungiKamiButton = document.querySelector("#call button");
const bannerSection = document.querySelector("#banner");
const navLinks = document.querySelectorAll(".nav-link");
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestSelect = document.querySelector("#interest");
const submitButton = document.querySelector('button[type="submit"]');

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    alert("Silahkan isi nama");
  } else if (emailInput.value === "") {
    alert("Silahkan isi email");
  } else if (interestSelect.value === "") {
    alert("Interest harus dipilih");
  } else {
    alert("Formulir berhasil dikirim!");
  }
});

hubungiKamiButton.addEventListener("click", () => {
  bannerSection.scrollIntoView({ behavior: "smooth" });
});
