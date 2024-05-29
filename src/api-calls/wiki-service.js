import { ORIGIN } from '../../config.js';

export const wikiService = async (searchTerm = '') => {
    // console.log(searchTerm)
    let api_call = {
        action: 'query',
        list: 'search',
        prop: 'info',
        inprop: 'url',
        utf8: "",
        format: 'json',
        origin: '*',
        srlimit: '50',
        srsearch: searchTerm
    }
    let URL = `${ORIGIN}`
    for (const key in api_call) {
        URL += `&${key}=${api_call[key]}`
    }
    // console.log(URL)

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    const result = await response.json();
    console.log(URL)
    return result
};
