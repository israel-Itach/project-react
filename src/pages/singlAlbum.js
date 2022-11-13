import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SinglAlbum() {
    const { albumId } = useParams();
    const [user, setUser] = useState([]);
    const [album, setAlbum] = useState([]);
    // const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then(res => res.json())
            .then(data => setAlbum(data))
    }, [])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <br />
            <h2>album {albumId}</h2>
            <h3>{album && album.title}</h3>
            <Carousel>
{user &&user.map((x, idx)=> ( <div>
<h3>{x.title}</h3>
<img loading='lazy' key={idx} src={x.thumbnailUrl} style={{width:'70%'}}/>
</div>
))}
            </Carousel>
            <br />
            <Link className='btn' to={'/albums'}>back to all albums</Link>
        </div>
    )

}

export default SinglAlbum;