import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

class CharList extends Component {
    
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(charList => this.onCharListLoaded(charList))
            .catch(this.onError)
    }

    renderCharList = (arr) => {
        const charList = arr.map(item => {
            let imgStyle = {"objectFit" : "cover"};
            if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {"objectFit" : "unset"}
            }
            
            return (
                <li className="char__item" key={item.id}>
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

    render(){
        const {charList, loading, error} = this.state;
        
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? this.renderCharList(charList) : null; 
        return (
            <div className="char__list">
                {spinner}
                {errorMessage}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;
