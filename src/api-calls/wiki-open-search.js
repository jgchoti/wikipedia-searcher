import { ORIGIN } from '../../config.js';

export const wikiOpenSearch = async (searchTerm = '') => {
    // console.log(searchTerm)
    let params = {
        action: "opensearch",
        format: "json",
        limit: "6",
        origin: '*',
        search: searchTerm
    };

    let URL = `${ORIGIN}`
    for (const key in params) {
        URL += `&${key}=${params[key]}`
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


