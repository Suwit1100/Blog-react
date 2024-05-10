import React, { useEffect, useState } from 'react'
import '../css/Blogs.css'
import { Link } from 'react-router-dom';
function Blogs(props) {
    const { blogs } = props;
    const [search, setSearch] = useState('');
    const [filtersearch, setFiltersearch] = useState([]);
    useEffect(() => {
        if (search) {
            const result = blogs.filter((item) => item.title.includes(search))
            setFiltersearch(result)
            console.log(filtersearch);
        }
    }, [search])
    return (
        <div className="blogs-container">
            <div className="search-container">
                <input type="text" placeholder='ค้นหาบทความ' onChange={(e) => setSearch(e.target.value)} value={search} />
            </div>
            <div className="result-search" hidden={!search}>
                {filtersearch.length === 0 ? (
                    <div className="item">
                        <span className='notfound'>ไม่พบข้อมูล</span>
                    </div>
                ) : (
                    filtersearch.map((e) => {
                        return (
                            <>
                                <Link className="item" key={e.id} to={`/blog/${e.id}`}    >
                                    <img src={e.image_url} alt={e.title} width={50} height={50} />
                                    <span>{e.title}</span>
                                </Link>
                            </>
                        );
                    })
                )}

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