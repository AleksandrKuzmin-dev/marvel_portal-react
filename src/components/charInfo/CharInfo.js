import PropTypes from 'prop-types';

import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss';

const CharInfo = (props) => {

    const renderCharInfo = (selectedChar) => {
        const {name, description, thumbnail, homepage, wiki, comics} = selectedChar;
        const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {"objectFit": "unset"} : {"objectFit": "cover"}

        return(
            <>
                <div className="char__basics">
                    <img src={thumbnail} 
                    alt={name}
                    style={imgStyle}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                {renderComics(comics)}
            </>    
        )
    }
    
    const renderComics = (comics) => {
        return (
            <>
                <div className="char__comics">Comics:</div>

                {comics.length === 0 ? <div>Комиксов с этим персонажем нет</div> : null}

                <ul className="char__comics-list">
                    {
                        comics.map((item, index) => {
                            if (index > 8) return null;
    
                            return (
                                <li 
                                className="char__comics-item"
                                key={index}
                                >
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }

    const {selectedChar} = props;
    const content = selectedChar ? renderCharInfo(selectedChar) : <Skeleton/>

    return (
        <div className="char__info">
            {content}
        </div>
    )
    
}

CharInfo.propTypes = {
    selectedChar: PropTypes.object
}

export default CharInfo;