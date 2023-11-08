fetch('JSON/sport.json')
  .then(response => response.json())
  .then(data => {
    const title = document.title;

    // Determine the array to use based on the document title
    let articlesArray = [];
    if (title === 'sport') {
      articlesArray = data.sportartikler;
    } else if (title === 'nyheder') {
      articlesArray = data.nyhederartikler;
    } else if (title === 'underholdning') {
      articlesArray = data.underholdningartikler;
    }

    const cards = document.querySelectorAll('.card');

    articlesArray.forEach((articleData, index) => {
      const card = cards[index];
      if (card) {
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
