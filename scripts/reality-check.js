document.addEventListener("DOMContentLoaded", function () {
function handleSubmit(event) {
    event.preventDefault(); // Forhindrer standardformularindsendelse
  
    var topic = document.getElementById("emne").value;
    var message = document.getElementById("besked").value;
  
    // Simpel validering
    if (topic.trim() === "" || message.trim() === "") {
      alert("Fejl: Udfyld venligst alle felter.");
    } else {
      // Simulerer en vellykket indsendelse
      alert(`Tak for din henvendelse. Vi vender tilbage til dig snarest muligt`);
      document.getElementById("nyhedsformular").reset(); // Nulstil formularen
    }
  }
  
  document.getElementById("nyhedsformular").addEventListener("submit", handleSubmit);
});