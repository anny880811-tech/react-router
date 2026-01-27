import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const api = 'https://api.unsplash.com/photos';
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
    const { id } = useParams();
    const [photo, setPhoto] = useState({});
    const navigave = useNavigate();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${api}/${id}?client_id=${accessId}`)
            console.log(res);
            setPhoto(res.data);
        })();
    }, [id])

    return (
        <>
            <button type="button" onClick={() => { navigave(-1) }} className="form-control">回到上一頁</button>
            這是單張圖片{id}
            <p>{photo.description}</p>
            <img src={photo?.urls?.regular} className="img-fluid" alt="圖片" />
        </>
    )
}