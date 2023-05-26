const axios = require('axios');

// Ajouter un auteur
axios.post('http://localhost:4000/authors', {
  name: 'John Doe',
  nationality: 'English'
})
  .then(response => {
    const authorId = response.data.id;

    // Ajouter une catégorie
    axios.post('http://localhost:5000/categories', {
      name: 'Fiction'
    })
      .then(response => {
        const categoryId = response.data.id;

        // Ajouter un livre
        axios.post('http://localhost:3000/books', {
          title: 'Book Title',
          authorId: authorId,
          categoryId: categoryId
        })
          .then(response => {
            console.log("Livre ajouté avec succès :", response.data);
          })
          .catch(error => {
            console.error("Erreur lors de l'ajout du livre :", error);
          });
      })
      .catch(error => {
        console.error("Erreur lors de l'ajout de la catégorie :", error);
      });
  })
  .catch(error => {
    console.error("Erreur lors de l'ajout de l'auteur :", error);
  });