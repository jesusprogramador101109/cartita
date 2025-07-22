function mostrarPastel() {
  document.querySelector('.btn').style.display = 'none';
  document.getElementById('cake').style.display = 'block';
  setTimeout(() => {
    document.getElementById('card').style.display = 'block';
  }, 800);
}
