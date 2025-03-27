export function displaySearch(content) {
    const gridRecipes = document.querySelector('#search-results');
    gridRecipes.innerHTML = '';

    const limitedContent = content.slice(0, 8);

    const contentElements = limitedContent.map(recipe => {

        const contentElement = document.createElement('div');
        contentElement.classList.add('recipe');

        contentElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
             <h3>${recipe.name}</h3>
             <p>${recipe.description}</p>
             <p>${recipe.ingredients}</p>
             
         `;
        return contentElement;
    });

    gridRecipes.append(...contentElements);
}
