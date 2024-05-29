/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultButton = (result = {}, wikiLink) => {
    const aEl = document.createElement('a');
    aEl.href = wikiLink
    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'View Full Article'
    aEl.appendChild(buttonEl)
    return aEl;
};
