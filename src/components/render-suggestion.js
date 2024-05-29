import { WIKI_URL } from '../../config.js'
import { renderError } from './render-error.js';
import { renderResultButton } from './render-result-button.js';
import { renderResultHeader } from './render-result-header.js';
import { renderResultText } from './render-result-text.js';
/**
 * Document me!
 *
 * @returns
 */
export const renderSuggestion = (results = []) => {
    console.log(results)

    const outputContainer = document.getElementById('output')
    const container = document.createElement('div')

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
        container.appendChild(aEl)

        outputContainer.appendChild(container)
    }

}