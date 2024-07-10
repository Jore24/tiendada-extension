import { displayCurrentUrl, displaySavedUrl, setCurrentUrl } from "./utils/url";

// Configura el evento 'DOMContentLoaded' para inicializar la extensión
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar la URL actual
  displayCurrentUrl();

  // Mostrar la URL guardada
  displaySavedUrl();

  // Configurar el botón para guardar la URL actual
  const setUrlButton = document.getElementById("set-url-button");
  setUrlButton.addEventListener("click", setCurrentUrl);
});
