/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultHeader = (result = {}, wikiLink) => {
    const headerEl = document.createElement('h3');
    const aHeaderEl = document.createElement('a');
    aHeaderEl.href = wikiLink
    aHeaderEl.innerText = result.title
    headerEl.appendChild(aHeaderEl)
    return headerEl;
};
