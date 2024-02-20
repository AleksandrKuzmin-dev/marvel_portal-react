import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

class CharList extends Component {
    
    state = {
        charList: [],
        selectedCharId: null,
        loading: true,
        error: false,
        offset: 210,
        limitEnded: false,
        newCharLoading: false
    }

    marvelService = new MarvelService();

    onCharListLoaded = (charList) => {
        this.setState(state => {
            let limitEnded = false;

            if (1564 - state.offset <= 9) {
                limitEnded = true;
            }

            return {
                charList: [...state.charList, ...charList],
                loading: false,
                error: false,
                newCharLoading: false,
                offset: state.offset + 9,
                limitEnded
            }
        })

    }

    onShowNewCharacters = () => {
        this.setState({newCharLoading: true})

        this.marvelService.getAllCharacters(9, this.state.offset)
            .then(charList => this.onCharListLoaded(charList))
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onChangeSelectedChar = (char) => {
        this.props.onUpdateSelectedChar(char);
        this.setState({selectedCharId: char.id})
    }

    componentDidMount() {
        this.onShowNewCharacters();
    }

    renderCharList = (arr) => {
        const charList = arr.map(item => {
            let imgStyle = {"objectFit" : "cover"};
            if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {"objectFit" : "unset"}
            }

            const clazzName = this.state.selectedCharId === item.id ? 'char__item char__item_selected' : 'char__item';
            
            return (
                <li className={clazzName}
                    key={item.id}
                    onClick={() => this.onChangeSelectedChar(item)}>
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
        const {charList, loading, error, limitEnded, newCharLoading} = this.state;
        
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? this.renderCharList(charList) : null;

        return (
            <div className="char__list">
                {spinner}
                {errorMessage}
                {content}
                <button 
                className="button button__main button__long"
                onClick={this.onShowNewCharacters}
                style={{'display': limitEnded ? 'none' : 'block'}}
                disabled={newCharLoading}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;
