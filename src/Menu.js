import React from 'react';

const Menu = ({ items }) => {
    return <div className='container'>
        {items.map((menuItem) => {
            const { id, title, img, price, desc } = menuItem;

            return <article key={id} className='row my-5 justify-content-between'>
                <div className='col-lg-6 mb-sm-3'>
                    <img src={img} alt={title} />
                </div>
                <div className='col-lg-6 mt-2'>
                <header className='row mx-1 justify-content-between'>
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                </header>
                <hr></hr>
                <p className='mx-lg-2 mt-4'>{desc}</p>
                </div>
            </article>
        }
        )}
    </div>

}

export default Menu;