import React from 'react';

import './card.styles.css';

// Our Card component is responsible for building how we want our Card to look. Once it is build it sends that jsx information up to the CardList which arranges it and then to the App.js which renders it. 
export const Card = props => (
    <div className='card-container'>
    {
        // The image that we are using is grabbed from the website listed below. Each monster is given a unique image by using the id property. 
    }
    <img alt='monster' src={`http://robohash.org/${props.monster.id}?set=set3&size=180x180`}/>
    <h1 >{props.monster.name} lives in {props.monster.address.city}</h1>
    <p>{props.monster.email}</p>
    </div>
)