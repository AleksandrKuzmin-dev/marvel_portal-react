import { useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ComicsList from '../comicsList/ComicsList';

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onUpdateSelectedChar = (char) => {
        setSelectedChar(char);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
               {/*  <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onUpdateSelectedChar={onUpdateSelectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo selectedChar={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}

                <ComicsList/>
            </main>
        </div>
    )
}

export default App;