import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 1500);
    }, [navigate])

    return (<>
        這是不存在的頁面
    </>)
}