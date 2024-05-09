import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogs from '../data/blogs';

function Detail() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const result = blogs.find((item) => item.id === parseInt(id))
        console.log(result);
        setTitle(result.title);
        setContent(result.content);
        setImage(result.image_url);
        setAuthor(result.author);
    }, [])
    return (
        <div>
            บทความที่ {id}
        </div>
    )
}

export default Detail