fetch('JSON/sport.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const cards = document.querySelectorAll('.card');

    data.sportartikler.forEach((articleData, index) => {
      const card = cards[index]; // Holen Sie sich die Karte entsprechend des Index.
      if (card) { // Überprüfen Sie, ob die Karte existiert.
        card.querySelector('.overskrift').textContent = articleData.overskrift;
        const image = card.querySelector('.billede');
        image.src = 'billeder/' + articleData.billede;
        image.alt = articleData.alt;
      }
    });
  })
  .catch(error => {
    console.error('Fejl ved hentning af data: ', error);
  });


