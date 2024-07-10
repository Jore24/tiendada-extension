// Función para obtener la URL de la pestaña activa y mostrarla en el elemento con id 'current-url'
export function displayCurrentUrl() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const currentUrl = currentTab.url;
    const urlElement = document.getElementById("current-url");
    urlElement.textContent = currentUrl;
  });
}

// Función para recuperar la URL guardada y mostrarla en el elemento con id 'saved-url'
export function displaySavedUrl() {
  if (chrome.storage) {
    chrome.storage.local.get(["savedUrl"], (result) => {
      const savedUrlElement = document
        .getElementById("saved-url")
        .querySelector("span");
      savedUrlElement.textContent = result.savedUrl || "None";
    });
  } else {
    console.error("chrome.storage is not available");
  }
}

// Función para guardar la URL de la pestaña activa en el almacenamiento local
export function setCurrentUrl() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const currentUrl = currentTab.url;
    if (chrome.storage) {
      chrome.storage.local.set({ savedUrl: currentUrl }, () => {
        const savedUrlElement = document
          .getElementById("saved-url")
          .querySelector("span");
        savedUrlElement.textContent = currentUrl;
      });
    } else {
      console.error("chrome.storage is not available");
    }
  });
}
