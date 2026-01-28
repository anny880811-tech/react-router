import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

// import Home from './pages/home';
// import About from './pages/About';
import AlbumLayout from './pages/AlbumLayout';
import AlbumIndex from './pages/AlbumIndex';
import AlbumPhoto from './pages/AlbumPhoto';
import AlbumSearch from './pages/AlbumSearch';
import NotFound from './pages/NotFound';



function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container mt-3">
                {/* <Routes>

                    <Route path='/album' element={<AlbumLayout />}>
                        <Route index element={<AlbumIndex />}></Route>
                        <Route path='search' element={<AlbumSearch />}></Route>
                        <Route path=':id' element={<AlbumPhoto />}></Route>
                    </Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes> */}
                <Outlet/>
            </div>
        </div>
    )
}

export default App
