fetch('JSON/articleData.json')
  .then(response => response.json())
  .then(data => {
    const title = document.title;

    const cards = document.querySelectorAll('.card');
    const categories = ['nyheder', 'sport', 'underholdning'];

    if (title === 'forside') {
      const selectedArticles = new Set();

      cards.forEach(card => {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const categoryArticles = data[category + 'artikler'];

        let randomArticle;
        do {
          randomArticle = categoryArticles[Math.floor(Math.random() * categoryArticles.length)];
        } while (selectedArticles.has(randomArticle));

        selectedArticles.add(randomArticle);

        card.querySelector('.overskrift').textContent = randomArticle.overskrift;
        const image = card.querySelector('.billede');
        image.src = 'billeder/' + randomArticle.billede;
        image.alt = randomArticle.alt;
      });
    } else {
      let articlesArray = [];
      if (categories.includes(title)) {
        articlesArray = data[title + 'artikler'];
      }

      articlesArray.forEach((articleData, index) => {
        const card = cards[index];
        if (card) {
          card.querySelector('.overskrift').textContent = articleData.overskrift;
          const image = card.querySelector('.billede');
          image.src = 'billeder/' + articleData.billede;
          image.alt = articleData.alt;
        }
      });
    }
  })
  .catch(error => {
    console.error('Fejl ved hentning af data: ', error);
  });
