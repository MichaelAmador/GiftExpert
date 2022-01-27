import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {

    // const categories = ['Anime', 'Series', 'Movies']
    const [categories, setCategories] = useState(['Anime'])

    // const handleAdd = () => {
    //     // setCategories(...categories, 'Cartoon');
    //     setCategories(cats => [...categories, 'Cartoon']);
    // }

    return (
        <>
            <h2> GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ol>

        </>
    )
}

