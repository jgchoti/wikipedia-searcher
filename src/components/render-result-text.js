/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultText = (result = {}) => {
    const pEl = document.createElement('p');
    pEl.innerHTML = result.snippet
    return pEl;
};
