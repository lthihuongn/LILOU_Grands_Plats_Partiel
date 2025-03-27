export async function fetchRecipes(type) {
    try {
        const response = await fetch('./json/recipes.json');
        const recipes = await response.json();

        const typesContainer = document.querySelector('#recipes-list');
        typesContainer.innerHTML = '';

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
             <img src="${recipe.image}" alt="${recipe.name}">
             <h3>${recipe.name}</h3>
             
             <p>${recipe.description}</p>
             <p>${recipe.ingredients}</p>
             <p>${recipe.time}</p>
             
         `;
            typesContainer.appendChild(recipeCard);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
    }
}


