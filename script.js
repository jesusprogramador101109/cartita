const btn = document.getElementById("btnMostrar");
const pastel = document.getElementById("pastel");
const tarjeta = document.getElementById("tarjeta");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  pastel.style.display = "block";
  tarjeta.style.display = "block";
});
