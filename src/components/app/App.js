import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';


class App extends Component {
    state = {
        selectedChar: null
    }

    onUpdateSelectedChar = (char) => {
        this.setState({selectedChar: char})
    }

    render(){
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onUpdateSelectedChar={this.onUpdateSelectedChar}/>
                        <CharInfo selectedChar={this.state.selectedChar}/>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;