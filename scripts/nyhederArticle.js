fetch('JSON/articleData.json')
  .then(response => response.json())
  .then(data => {
    const førsteArtikel = data.nyhederartikler[0];
    document.getElementById('overskrift').textContent = førsteArtikel.overskrift;
    document.title = førsteArtikel.overskrift;
    document.getElementById('tekst').textContent = førsteArtikel.tekst;
    const billede = document.getElementById('billede');
    billede.src = 'billeder/' + førsteArtikel.billede;
    billede.alt = førsteArtikel.alt;
    document.getElementById('billedTekst').textContent = førsteArtikel.billedtekst;
    document.getElementById('fotograf').textContent = "Foto: " + førsteArtikel.fotograf;
  })
  .catch(error => {
    console.error('Fejl ved hentning af data: ', error);
  });
