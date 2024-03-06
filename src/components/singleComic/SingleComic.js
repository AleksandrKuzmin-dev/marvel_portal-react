import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import MarvelService from '../../services/MarvelService';
import './singleComic.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


const SingleComic = () => {

    const [comic, setComic] = useState(null);

    const {comicId} = useParams();
    const {getComic, loading, error} = MarvelService();

    useEffect(() => {
        loadComic(comicId);
        // eslint-disable-next-line
    }, [comicId])

    const comicLoaded = (comic) => {
            setComic(comic);
    }

    const loadComic = (id) => {
            getComic(id)
                .then(comicLoaded)
                .catch(err => console.log(err));
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = error || loading || !comic ? null : <View comic={comic}/>


    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {thumbnail, title, description, pages, price, language} = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pages}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}


export default SingleComic;