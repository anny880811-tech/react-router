import AlbumLayout from '../pages/AlbumLayout';
import AlbumIndex from '../pages/AlbumIndex';
import AlbumPhoto from '../pages/AlbumPhoto';
import AlbumSearch from '../pages/AlbumSearch';
import NotFound from '../pages/NotFound';
import App from '../App.jsx'
import { Home, About } from '../pages';
import { createHashRouter } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'album',
                element: <AlbumLayout />,
                children: [
                    {
                        index: true,
                        element: <AlbumIndex />,
                    },
                    {
                        path: 'search',
                        element: <AlbumSearch />,
                    },
                    {
                        path: ':id',
                        element: <AlbumPhoto />,
                    },
                ]
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    }
];
const router = createHashRouter(routes);

export default router;