// import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (cate) => {
  
    const [state, setState] = useState({
        
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( cate )
            .then(imgs => {
                
                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 3000);
            });
    }, [cate]);


    return state;
}
