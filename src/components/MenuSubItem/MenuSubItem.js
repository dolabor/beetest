import React from 'react';
import './MenuSubItem.css'

function MenuSubItem({children, isSelected}) {
    return (
        <div className={`MenuSubItem ${isSelected ? 'MenuSubItem__Selected' : ''}`}>{children}</div>
    );
}

export default MenuSubItem;