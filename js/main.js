const burgerEl = document.querySelector(".burger");
const listEL = document.querySelector(".navbar__list");
burgerEl.addEventListener("click", () => {
  listEL.classList.toggle("active");
  if (listEL.classList.contains("active")) {
    listEL.style.transform = "translate(0%)";
  } else {
    listEL.style.transform = "translate(-100%)";
  }
});
