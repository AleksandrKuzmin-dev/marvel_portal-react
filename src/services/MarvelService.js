import { useHttp } from "../hooks/http.hook";

const MarvelService = () => {
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=95c456a7ea2c5345495bb580c088c93e';
    const _limitCharacters = 9;
    const _offsetCharacters = 210;
    const _limitComics = 8;
    const _offsetComics = 0;

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

   const getAllComics = async (offset = _offsetComics, limit = _limitComics) => {
        const res = await request(`${_apiBase}comics?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(comics => _transformComics(comics));
   }

   const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
   }

   const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'Описание комикса отсутствует',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            language: comics.textObjects[0]?.language || 'en-us',
            pages: comics.pageCount ? `${comics.pageCount} pages` : 'Нет информации о количестве страниц',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'Стоимость не указана',
            url: comics.urls[0].url
        }
   }

    return {
        loading,
        error,
        getAllCharacters,
        getCharacter,
        getAllComics,
        getComic
    }
}

export default MarvelService;