import React from 'react';
import './Character.css';

const Character = props => {
    return (
        <div className="characterContainer">
            <li className="character">
                {props.character.name} 
            </li>
            <div className="attr">
            Hair color: {props.character.hair_color} 
            </div>
            <div className="attr">
            Height: {props.character.height} 
            </div>
            <div className="attr">
            Film appearances: {props.character.films.length} 
            </div>
            <div className="attr">
            More info on {props.character.name}'s species: <a href={props.character.species} target="_blank">CLICK HERE</a>
            </div>
        </div>
    );
};

export default Character;