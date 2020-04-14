import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styles.css';

// // The props that we are utilizing in this method is any information that we are passing to this component where it is being used. We can see that in this example when we view the console we see all of the properties that are being stated in the App.js where the CardList is being utilized. 
// export const CardList = props => {
//     console.log(props);

//     return <div className='card-list'>{props.children}</div>;
// };

//------------------------------------------------ Handling Data in the Right Place -----------------------------------------//


// export const CardList = props => {
//     return <div className='card-list'>
//     {
//         // Here we do not use this.state because it is not accessible. How we access the information that was passed down from the App.js is through the properties aka the props. This will act the same as if we were to handle everything on the App.js side. 
//     }
//     {props.monsters.map(monster => (
//         <h1 key = {monster.id}>{monster.name} lives in {monster.address.city}</h1>))}
//     </div>
// };

//------------------------------------------------ Data to the Card where it is Built -----------------------------------------//

// We want the CardList to handle the job of just building the list of Cards. How we can accomplish this is by once again passing the needed information down. Here we see the CardList passing the properties that it received from the App.js down to the Card component. This allows the Card component to build the Card for the CardList to display. 
export const CardList = props => (
    <div className='card-list'>
    {props.monsters.map(monster =>(
        <Card key={monster.id} monster = {monster} />
    ))}
    </div>
);
