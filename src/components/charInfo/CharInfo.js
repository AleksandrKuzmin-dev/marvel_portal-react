import './charInfo.scss';
import { Component } from 'react';
import Skeleton from '../skeleton/Skeleton'

class CharInfo extends Component {

    renderCharInfo = (selectedChar) => {
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
                {this.renderComics(comics)}
            </>    
        )
    }
    
    renderComics = (comics) => {
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

    render() {
        const {selectedChar} = this.props;
        const content = selectedChar ? this.renderCharInfo(selectedChar) : <Skeleton/>

        return (
            <div className="char__info">
                {content}
            </div>
        )
    }
}



export default CharInfo;