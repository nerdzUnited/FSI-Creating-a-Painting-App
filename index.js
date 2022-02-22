let selectedColor = "";

let painting = document.querySelector(".painting");

painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = selectedColor;
});

let palette = document.querySelector(".palette");

palette.addEventListener("click", function (e) {
  selectedColor = e.target.id;
});
