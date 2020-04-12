import React from 'react';

// The props that we are utilizing in this method is any information that we are passing to this component where it is being used. We can see that in this example when we view the console we see all of the properties that are being stated in the App.js where the CardList is being utilized. 
export const CardList = props => {
    console.log(props);

    return <div>CardList component</div>;
};