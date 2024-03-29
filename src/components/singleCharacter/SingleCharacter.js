import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleCharacter.scss';


const SingleCharacter = () => {

    const [char, setChar] = useState(null);

    const {charId} = useParams();
    const {getCharacter, loading, error} = MarvelService();

    useEffect(() => {
        loadComic(charId);
        // eslint-disable-next-line
    }, [charId])

    const charLoaded = (char) => {
            setChar(char);
    }

    const loadComic = (id) => {
        getCharacter(id)
                .then(charLoaded)
                .catch(err => console.log(err));
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = error || loading || !char ? null : <View char={char}/>


    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({char}) => {
    const {thumbnail, title, description} = char;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description.length > 0 ? description : 'Описание отсутствует'}</p>
            </div>
        </div>
    )
}


export default SingleCharacter;