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
export const renderResult = (results = []) => {
    const outputContainer = document.getElementById('output')

    if (results.length === 0) {
        renderError('No result found :(')
        return
    }

    results.forEach(result => {
        const container = document.createElement('div')
        container.classList.add('row')
        const wikiLink = `${WIKI_URL}${result.title}`

        // title
        const headerEl = renderResultHeader(result, wikiLink)
        container.appendChild(headerEl)

        // text
        const pEl = renderResultText(result)
        container.appendChild(pEl)

        //button
        const aEl = renderResultButton(result, wikiLink)
        container.appendChild(aEl)

        outputContainer.appendChild(container)
    })
}