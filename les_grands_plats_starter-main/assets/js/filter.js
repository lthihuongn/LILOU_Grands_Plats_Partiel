export function filterPlats() {
    const filterButtons = document.querySelectorAll('#ingredients-list');
    filterButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const category = button.dataset.category;
            const plats = await fetchFilteredData(category);
            displayPlats(plats);
        });
    });
}

export async function fetchFilteredData(category) {
    try {
        const response = await fetch(`./json/recipies.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des plats :", error);
    }
}

export function displayPlats(plats) {
    const platsContainer = document.getElementById('plats');
    platsContainer.innerHTML = '';
    plats.forEach(plat => {
        const platElement = document.createElement('div');
        platElement.classList.add('plat');
        platElement.innerHTML = `
            <img src="${plat.image}" alt="${plat.name}">
            <p>${plat.name}</p>
        `;
        platsContainer.appendChild(platElement);
    });
}
