import { fetchRecipes } from "./fetch.js";
import { searchRecipes, createSearchWrapper } from "./search.js";
import { filterPlats } from "./filter.js";

document.addEventListener('DOMContentLoaded', () => {
    fetchRecipes();
    filterPlats();


});
