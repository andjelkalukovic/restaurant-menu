import React from 'react';
import Button from 'react-bootstrap/Button'

const Categories = ({ categories, filterItems }) => {
    return <div className='text-center'>
        {categories.map((category, index) => {
            return <Button key={index} variant="outline-dark" className='m-2 text-capitalize' 
            type='button' onClick={() => filterItems(category)}>
                {category}</Button>
        })}
    </div>

}

export default Categories;