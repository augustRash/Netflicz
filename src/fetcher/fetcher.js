const apiKey = "6f9286d54de4891ea7a5c91779e09786";

export const fetcher = (url, options = {}) => {
    options.api_key = apiKey;
    options.language = "it-IT";
    const queryParams = "?" + new URLSearchParams(options).toString();

    return fetch("https://api.themoviedb.org/3/" + url + queryParams)
        .then((res) => res.json())
        .catch(console.error);
}
