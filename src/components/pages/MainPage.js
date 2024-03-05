
import { useState } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setSelectedChar] = useState(null);

    const onUpdateSelectedChar = (char) => {
        setSelectedChar(char);
    }

    return (
        <>
            <ErrorBoundary>
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

            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}


export default MainPage;