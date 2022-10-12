import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

  const [categories, setCategories] = useState(['One Punch']);
  
  
  return (
    <>
        <h2>GiftExpertApp</h2>
        <hr/>
        <AddCategory setCates={setCategories}/>


        <ol>

          {
            categories.map( cate => 
              <GifGrid 
                key={cate}
                cate = {cate}/>
            )
          }
        </ol>
        
    </>
  )
}
