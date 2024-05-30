export const renderResultsPerPage = (results, currentPage, resultsPerPage) => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const currentResults = results.slice(start, end);

    return currentResults;
};