import React from 'react';

import '../menu-item/menu-item.styles.css';

const MenuItem = ({ title, imageUrl, id, size }) => (
    <div className={`menu-item ${size}`}
    >
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Subtitle</span>
        </div>
    </div>
);

export default MenuItem;