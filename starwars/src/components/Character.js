import React from 'react';
import './Character.css';

const Character = props => {
    return (
        <div className="character">
            {props.character.name}
        </div>
    );
};

export default Character;