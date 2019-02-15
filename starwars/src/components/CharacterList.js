import React from 'react';
import './CharacterList.css';

import Character from './Character';

const CharacterList = props => {
    return (
        <div className="characterList">
            {props.starwarsChars.map(character => (
                <Character
                    getCharacters={props.getCharacters}
                    key={character.created}
                    character={character}
                />
            ))}
        </div>
    );
};

export default CharacterList;