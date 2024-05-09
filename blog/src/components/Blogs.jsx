import React from 'react'
import '../css/Blogs.css'
import { Link } from 'react-router-dom';
function Blogs(props) {
    const { blogs } = props;
    return (
        <div className="blogs-container">
            <article>
                {blogs.map((item) => {
                    return (
                        <>
                            <Link to={`/blog/${item.id}`} key={item.id}>
                                <div className="card" >
                                    <h2>{item.title}</h2>
                                    <p>{item.content.substring(0, 300)}</p>
                                </div>
                            </Link>
                            <hr /></>
                    );
                })}
            </article>
        </div>
    )
}

export default Blogs