// Funktion til at indlæse menuen på en given side
function loadMenu() {
    const menuContainer = document.getElementById("menu-container");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "menu.html", true);
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        menuContainer.innerHTML = xhr.responseText;
      }
    };
  
    xhr.send();
  }

// Kald loadMenu() for at indlæse menuen på en side
loadMenu();