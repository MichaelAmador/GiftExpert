import React /*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([]);
    const { data: imgs, loading } = useFetchGifs(category);
    
    // useEffect(() => {
    //     getGifts(category)
    //         .then(setimages)
    // }, []);

    return (
        <div className="card-grid animate__fadeIn">

            {loading && <p className='animate__flash'>Loading</p>}

            <h3>{category}</h3>
            {
                imgs.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))
            }
        </div>
    )
}
