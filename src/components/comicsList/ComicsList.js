import {useState, useEffect} from 'react';

import './comicsList.scss';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';


const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limitEnded, setLimitEnded] = useState(false);
    const [firstLoadEnded, setFirstLoadEnded] = useState(false);

    const {getAllComics, loading, error} = MarvelService();

    useEffect(() => {
        onLoadNewComics();
    }, [])

    const comicsLoaded = (newComicsList) => {
        if (offset >= 59339 - 8) {
            setLimitEnded(true)
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setOffset(offset => offset + 8);
        setFirstLoadEnded(true);
    }

    const onLoadNewComics = () => {
        getAllComics(offset)
            .then(newComicsList => comicsLoaded(newComicsList))
            .catch(err => console.log(err))
    }

    const renderComicsList = (comics) => {
        const comicsElement = comics.map(item => {
            const price = item.price === 0 ? 'NOT AVAILABLE' : `${item.price}$`;
            
            return (
                <li className="comics__item" key={item.id}>
                    <a href={item.url} target="_blank">
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{price}</div>
                    </a>
                </li>
            )
        })

        return (
            <ul className="comics__grid">
                {comicsElement}
            </ul>
        )
    }

    const content = renderComicsList(comicsList);
    const spinner = loading && !firstLoadEnded ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    
    return (
        <div className="comics__list">
            {spinner}
            {errorMessage}
            {content}
            <button 
            className="button button__main button__long" 
            onClick={onLoadNewComics}
            style={{'display': limitEnded ? 'none' : 'block'}}
            disabled={loading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;