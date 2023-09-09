
const headers = {
    'Authorization': import.meta.env.VITE_API_KEY
}

const urlEncode = (urlObj) => {
    return Object.entries(urlObj).join('&').replace(/,/g, '=').replace(/#/g, '%23');
}

const fetchData = async (url, callback) => {
    try {
        const response = await fetch(url, { headers });
        if (response.ok) {
            const data = await response.json();
            callback(data);
        }
    } catch (error) {
        console.log(error);
    }
}

let requestUrl = "";

const root = {
    default: 'https://api.pexels.com/v1/',
    videos: 'https://api.pexels.com/videos/'
}

export const client = {
    photos: {
        search(parameters, callback) {
            requestUrl = `${root.default}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },
        curated(parameters, callback) {
            fetchData(`${root.default}curated?${urlEncode(parameters)}`, callback);
        },
        detail(id, callback) {
            fetchData(`${root.default}photos/${id}`, callback);
        },
    },
    videos: {
        search(parameters, callback) {
            requestUrl = `${root.videos}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },
        popular(parameters, callback) {
            fetchData(`${root.videos}popular?${urlEncode(parameters)}`, callback);
        },
        detail(id, callback) {
            fetchData(`${root.videos}videos/${id}`, callback);
        },

    },
    collections: {
        featured(parameters, callback) {
            requestUrl = `${root.default}collections/featured?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },
        detail(id, parameters, callback) {
            requestUrl = `${root.default}collections/${id}?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },
    },
}

// ! Add To Favorites

export const favoriteObj = JSON.parse(window.localStorage.getItem('favorite')) || { photos: {}, videos: {} }

export const addToFavorite = (type, id) => {
    if (favoriteObj?.[type]?.[id]) {
        delete favoriteObj[type][id];
        window.localStorage.setItem('favorite', JSON.stringify(favoriteObj));
        return false;
    }
    client[type].detail(id, (data) => {
        favoriteObj[type][id] = data;
        window.localStorage.setItem('favorite', JSON.stringify(favoriteObj));
    })
    return true;
}

