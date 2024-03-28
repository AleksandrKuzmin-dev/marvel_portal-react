import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Suspense, lazy} from "react";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import Spinner from "../spinner/Spinner.js";

const Page404 = lazy(() => import('../pages/Page404.js'));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));


const App = () => {

    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <div className="app">
                        <Routes>
                            <Route path='/' element={<AppHeader/>}>
                                <Route index element={<MainPage />} />
                                <Route path='/comics'>
                                    <Route index element={<ComicsPage />} />
                                    <Route path=':comicId' element={<SingleComicPage />} />
                                </Route>
                                <Route path='*' element={<Page404 />} />
                            </Route>
                        </Routes>
                </div>
            </Router>
        </Suspense>
    )
}

export default App;