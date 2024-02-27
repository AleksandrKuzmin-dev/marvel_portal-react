import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';

const CharList = (props) => {
    
    const [charList, setCharList] = useState([]),
          [selectedCharId, setSelectedCharId] = useState(null),
          [offset, setOffset] = useState(210),
          [limitEnded, setLimitEnded] = useState(false),
          [newCharLoading, setNewCharLoading] = useState(false);

    const {loading, error, getAllCharacters} = MarvelService();

    const onCharListLoaded = (newCharList) => {
        let limitEnded = false;
        if (1564 - offset <= 9) {
            limitEnded = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setOffset(offset => offset + 9);
        setLimitEnded(limitEnded);
        setNewCharLoading(true);
    }

    const onShowNewCharacters = () => {
        getAllCharacters(9, offset)
            .then(charList => onCharListLoaded(charList))
            .catch(err => console.log(err))
    }

    const onChangeSelectedChar = (char, domElementChar) => {
        props.onUpdateSelectedChar(char);
        setSelectedCharId(char.id);
        domElementChar.focus();
    }

    useEffect(() => {
        onShowNewCharacters();
    }, []);

    const renderCharList = (arr) => {
        const charList = arr.map(item => {
            let imgStyle = {"objectFit" : "cover"};
            const clazzName = selectedCharId === item.id ? 'char__item char__item_selected' : 'char__item';

            if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {"objectFit" : "unset"}
            }

            return (
                <li className={clazzName}
                    key={item.id}
                    onClick={(e) => {
                        onChangeSelectedChar(item, e.target)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onChangeSelectedChar(item, e.target)
                        }
                    }}
                    tabIndex={0}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })
        
        return (
            <ul className="char__grid">
                {charList}
            </ul>
        )
    }
    
    const spinner = loading && !newCharLoading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = renderCharList(charList)

    return (
        <div className="char__list">
            {spinner}
            {errorMessage}
            {content}
            <button 
            className="button button__main button__long"
            onClick={e => onShowNewCharacters()}
            style={{'display': limitEnded ? 'none' : 'block'}}
            disabled={loading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}

CharList.propTypes = {
    onUpdateSelectedChar: PropTypes.func
}

export default CharList;
