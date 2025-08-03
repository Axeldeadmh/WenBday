function cambiarImagen(url) {
  const img = document.getElementById('imagenVisible');
  if (img.style.display === 'none' || img.src !== url) {
    img.src = url;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
}
