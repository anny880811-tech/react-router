import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

{/* <Routes>
                    <Route path='/album' element={<AlbumLayout />}>
                        <Route index element={<AlbumIndex />}></Route>
                        <Route path='search' element={<AlbumSearch />}></Route>
                        <Route path=':id' element={<AlbumPhoto />}></Route>
                    </Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes> */}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
