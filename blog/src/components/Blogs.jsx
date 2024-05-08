import React from 'react'
import '../css/Blogs.css'
function Blogs(props) {
    const { blogs } = props;
    return (
        <div className="blogs-container">
            <article>
                {blogs.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.content.substring(0, 300)}</p>
                            </div>
                            <hr />
                        </>
                    );
                })}
            </article>
        </div>
    )
}

export default Blogs