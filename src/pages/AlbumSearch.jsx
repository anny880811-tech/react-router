import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';

const api = 'https://api.unsplash.com/search/photos';
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumSearch() {
    const [search, setSearch] = useState('')
    const [list, setList] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    // useEffect(() => {
    //     //console.log(searchParams.get('query')) //取出的方法
    //     //setSearchParams({ query: 'cat' }) //寫入的方法
    // }, [])

    useEffect(() => {
        if (search !== '') {
            (async () => {
                const res = await axios.get(`${api}?client_id=${accessId}&query=${search}`);
                const { results } = res.data;
                console.log(results);

                setList(results);

            })();
        }
    }, [search])

    useEffect(() => {
        setSearch(searchParams.get('query'))
    }, [searchParams])

    return (
        <>
            這是搜尋頁面 {search}
            <input type="text" className="form-control"
                defaultValue={search} onKeyUp={(e) => {
                    if (e.code === 'Enter') {
                        //search(e.target.value)
                        setSearchParams({ query: e.target.value })
                    }
                }} />

            {list.map((item) => {
                return <li key={item.id}>
                    <Link to={`/album/${item.id}`}>{item.id}</Link>
                </li>
            })}
        </>
    )
}