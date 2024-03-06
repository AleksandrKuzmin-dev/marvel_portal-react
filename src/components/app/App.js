import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import SingleComicPage from "../pages/SingleComicPage";
import Page404 from "../pages/Page404";

const App = () => {

    return (
        <Router>
            <div className="app">
                    <Routes>
                        <Route path='/' element={<AppHeader/>}>
                            <Route index element={<MainPage/>} />
                            <Route path='/comics'>
                                <Route index element={<ComicsPage/>}/>
                                <Route path=':comicId' element={<SingleComicPage/>} />
                            </Route>
                            <Route path='*' element={<Page404/>} />
                        </Route>
                    </Routes>
            </div>
        </Router>
    )
}

export default App;