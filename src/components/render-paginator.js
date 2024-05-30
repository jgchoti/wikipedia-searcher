import { createPaginatorContent } from "./create-paginator-content.js";

export const renderPaginator = (results, currentPage = 1, resultsPerPage = 5) => {
    const totalPages = Math.ceil(results.length / resultsPerPage);

    // Create or clear the top paginator container
    let topPaginatorContainer = document.getElementById('top-paginator');
    if (!topPaginatorContainer) {
        const outputContainer = document.getElementById('output');
        topPaginatorContainer = document.createElement('div');
        topPaginatorContainer.id = 'top-paginator';
        outputContainer.insertBefore(topPaginatorContainer, outputContainer.children[0]);
    } else {
        topPaginatorContainer.innerHTML = '';
    }

    let bottomPaginatorContainer = document.getElementById('bottom-paginator');
    if (!bottomPaginatorContainer) {
        const outputContainer = document.getElementById('output');
        bottomPaginatorContainer = document.createElement('div');
        bottomPaginatorContainer.id = 'bottom-paginator';
        outputContainer.appendChild(bottomPaginatorContainer);
    } else {
        bottomPaginatorContainer.innerHTML = '';
    }

    createPaginatorContent(topPaginatorContainer, currentPage, totalPages, results, resultsPerPage);
    createPaginatorContent(bottomPaginatorContainer, currentPage, totalPages, results, resultsPerPage);
}



