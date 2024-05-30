import { paginatorListener } from "../listeners/paginator-listener.js";
export const createPaginatorContent = (container, currentPage, totalPages, results, resultsPerPage) => {
    const currentPageEl = document.createElement('span');
    currentPageEl.innerText = `Page ${currentPage} of ${totalPages}`;
    container.appendChild(currentPageEl);

    const navContainer = document.createElement('div');
    navContainer.className = "page-nav";

    let navList = {
        'btn-first': '<i class="fa-solid fa-backward-fast"></i>',
        'btn-prev': '<i class="fa-solid fa-chevron-left"></i>',
        'btn-next': '<i class="fa-solid fa-chevron-right"></i>',
        'btn-last': '<i class="fa-solid fa-forward-fast"></i>'
    };

    for (const key in navList) {
        const buttonEl = document.createElement('button');
        buttonEl.innerHTML = navList[key];
        buttonEl.id = `${key}-${container.id}`;
        navContainer.appendChild(buttonEl);
    }

    container.appendChild(navContainer);

    for (const key in navList) {
        paginatorListener(results, `${key}-${container.id}`, currentPage, totalPages, resultsPerPage);
    }
};
