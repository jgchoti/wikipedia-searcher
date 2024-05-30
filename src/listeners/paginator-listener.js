import { renderResult } from '../components/render-result.js';
import { renderPaginator } from '../components/render-paginator.js';

export const paginatorListener = (results, id, currentPage, totalPages, resultsPerPage) => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener('click', () => {
            let newPage = currentPage;
            if (id.startsWith('btn-first')) {
                newPage = 1;
            } else if (id.startsWith('btn-prev')) {
                newPage = Math.max(currentPage - 1, 1);
            } else if (id.startsWith('btn-next')) {
                newPage = Math.min(currentPage + 1, totalPages);
            } else if (id.startsWith('btn-last')) {
                newPage = totalPages;
            }
            renderResult(results, newPage, resultsPerPage);
            renderPaginator(results, newPage, resultsPerPage);
        });
    }
};
