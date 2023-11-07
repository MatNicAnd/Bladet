fetch('JSON/sport.json')
  .then(response => response.json())
  .then(data => {
    const førsteArtikel = data.sportartikler[0];
    document.getElementById('overskrift').textContent = førsteArtikel.overskrift;
    document.getElementById('tekst').textContent = førsteArtikel.tekst;
    document.getElementById('billede').src = 'billeder/' + førsteArtikel.billede;
    document.getElementById('billedTekst').textContent = førsteArtikel.billedtekst;
    document.getElementById('fotograf').textContent = "Foto: " + førsteArtikel.fotograf;
  })
  .catch(error => {
    console.error('Fehler beim Abrufen der Daten:', error);
  });
