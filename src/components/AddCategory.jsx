import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCates}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {{
        setInputValue(e.target.value);
    }}

    const handleSubtmit = (e) => {
        e.preventDefault();

        
        if (inputValue.trim().length > 2) {
            setCates(cates => [inputValue, ...cates]);
            setInputValue('')
        }
        
    }
    
  return (
    <>
        
        <form onSubmit={handleSubtmit}>
            <input 
                type="text"
                value={inputValue} 
                onChange={ handleInputChange }
            />
        </form>
    </>
  )
}

AddCategory.protoTypes = {
    setCates: PropTypes.func.isRequired
}
