import React from 'react'
import '../css/Blogs.css'
import { Link } from 'react-router-dom';
function Blogs(props) {
    const { blogs } = props;
    return (
        <div className="blogs-container">
            <div className="search-container">
                <input type="text" />
            </div>
            <div className="result-search">
                <div className="item">
                    <img src="" alt="" width={50} height={50} />
                    <span>adasda</span>
                </div>
                <hr />
                <div className="item">
                    <img src="" alt="" width={50} height={50} />
                    <span>adasda</span>
                    <hr />
                </div>
            </div>
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
                            <hr />
                        </>
                    );
                })}
            </article>
        </div>
    )
}

export default Blogs