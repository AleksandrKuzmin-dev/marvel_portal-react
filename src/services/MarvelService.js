import { useHttp } from "../hooks/http.hook";

const MarvelService = () => {
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=95c456a7ea2c5345495bb580c088c93e';
    const _limitCharacters = 9;
    const _offsetCharacters = 210;

    const {loading, error, request} = useHttp();

    const getAllCharacters = async (limit = _limitCharacters, offset = _offsetCharacters) => {
        const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return {
        loading,
        error,
        getAllCharacters,
        getCharacter
    }
}

export default MarvelService;