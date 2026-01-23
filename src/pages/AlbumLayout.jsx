import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom"

const api = 'https://api.unsplash.com/search/photos';
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumLayout() {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${api}?client_id=${accessId}&query=animal`);
            const { results } = res.data;
            setList(results);

        })();
    }, [])

    return (
        <div className="row">
            <div className="col-4">
                左側選單列表
                <p>
                    <Link to='search'>搜尋頁面</Link>
                </p>
                <ul>
                    {list.map((item) => {
                        return <li key={item.id}>
                            <Link to={item.id}>{item.id}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className="col-8">
                <Outlet context={list} />
            </div>
        </div>
    )
}



