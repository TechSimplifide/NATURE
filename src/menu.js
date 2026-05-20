// mobile menu

let menuBtn = document.querySelector("#humberg");

let closeBtn = document.querySelector("#cancel");

let mobileMeanus = document.querySelector("#mobileMenu");

let links = document.querySelectorAll(".link");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  mobileMeanus.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hidden");
  mobileMeanus.classList.add("hidden");
  menuBtn.classList.remove("hidden");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeBtn.classList.add("hidden");
    mobileMeanus.classList.add("hidden");
    menuBtn.classList.remove("hidden");
  });
});
