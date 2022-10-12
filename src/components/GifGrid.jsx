import React from 'react'
// import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ cate }) => {

    // para renobrar "data" se usa ":" seguidamente del nuevo nombre
    const {data:images, loading} = useFetchGifs(cate);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{cate}</h3>

            <div className='card-grid'>

                {loading && <p className='animate__animated animate__flash'>Loading...</p>}
                
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}
