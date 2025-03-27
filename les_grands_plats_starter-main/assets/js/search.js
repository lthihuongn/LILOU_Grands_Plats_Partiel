import {displaySearch} from './display.js';


const searchInput = document.querySelector('.search input');

export function createSearchWrapper() {
    let searchWrapper = document.querySelector('.container.search');

    if (!searchWrapper) {
        searchWrapper = document.createElement('div');
        searchWrapper.classList.add('wrapper', 'search');
        searchWrapper.innerHTML = `
            <h2>Résultats de la recherche</h2>
            <button class="close-search">Quitter</button>
            <div class="search-results-container" id="search-results">
                
            </div>`;
        const wrapper = document.querySelector('.container');
        if (wrapper) {
            document.body.insertBefore(searchWrapper, wrapper);
        } else {
            document.body.appendChild(searchWrapper);
        }

        const closeSearchButton = searchWrapper.querySelector('.close-search');
        closeSearchButton.addEventListener('click', () => {
            searchWrapper.style.display = 'none';
        });
    }

    return searchWrapper;
}


export async function searchRecipes(query) {
    try {


        const RecipesData = await RecipesResponse.json();

        const results = [...(RecipesData.results || [])];

        const searchWrapper = createSearchWrapper();
        const resultsContainer = searchWrapper.querySelector('.search-results-container');


        resultsContainer.innerHTML = '';

        if (results.length > 0) {
            displaySearch(results);
        } else {
            resultsContainer.innerHTML = `<p>Aucune recetet ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poissons", etc.</p>`;

        }

        searchWrapper.style.display = 'block';
    } catch (error) {
        console.error("Erreur lors de la recherche :", error);
    }
}

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            searchRecipes(query);
        }
    }
});
