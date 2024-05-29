import { wikiService } from '../api-calls/wiki-service.js';
import { renderResult } from '../components/render-result.js';
import { renderError } from '../components/render-error.js';
import { wikiOpenSearch } from '../api-calls/wiki-open-search.js';
import { renderSuggestion } from '../components/render-suggestion.js';

export const userInputHandler = async (event) => {
    const output = document.getElementById('output')
    output.innerHTML = ''
    const userInput = event.target.parentNode.children[0].value;
    // console.log(userInput)
    try {
        const infoPromise = wikiService(userInput);
        const suggestSearchPromise = wikiOpenSearch(userInput)

        const [info, suggestSearch] = await Promise.all([infoPromise, suggestSearchPromise])

        renderSuggestion(suggestSearch)
        renderResult(info.query.search)
    } catch (err) {
        if (userInput === '') {
            renderError('Input field empty!')
        }
        else {
            console.error(err);
            renderError(`An error occurred: ${err.message}`);
        }
    }
};
