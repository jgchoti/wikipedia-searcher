
import { renderError } from './render-error.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderSuggestion = (results = []) => {
    console.log(results)

    const outputContainer = document.getElementById('suggest-search')
    outputContainer.innerHTML = ""
    if (results.length === 0) {
        renderError('No result found :(')
        return
    }
    const suggestTitles = results[1]
    const suggestLinks = results[3]

    for (let i = 1; i < suggestTitles.length; i++) {

        //link
        const aEl = document.createElement('a')
        // aEl.innerText = suggestTitles[i]
        aEl.href = suggestLinks[i]

        const buttonEl = document.createElement('button');
        buttonEl.innerText = suggestTitles[i]
        buttonEl.className = "suggest-search"
        aEl.appendChild(buttonEl)
        outputContainer.appendChild(aEl)


    }

}