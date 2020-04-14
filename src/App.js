//These are our import statements. They hold the information that we need within the statements so we can use them later. They also allow the file to use anything that is imported this way. 
import React, {Component} from 'react';
//import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

//------------------------------------------------ Start HERE---------------------------------------------//
// The function below is used to kickstart our Application. What it does when called is return the html that is shown in the return statement. 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//------------------------------------------------ Class Component Example----------------------------------------//

// We can instead of using a function to return our desired html we can set up a class through Component. This allows use to use the state of the component. State is similar to props, but it is private and fully controlled by the component.
// class App extends Component {
// // Constructor functions are typically used for two things: Initializing local state by assigning an object to this.state or Binding event handler methods to an instance. Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead. Here we can see we are using it for local state and with our button we are using an event handler to change the state. 
//   constructor(){
//     super();
//     this.state = {
//       welcomeString:'Welcome to the React tutorial'
//     }
//   }
//   render() {
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {this.state.welcomeString} 
//         </p>
//         <button onClick ={() => this.setState({welcomeString:'Let us see what we can do'})}>Click to change text</button>
//       </header>
//     </div>
//     );
//   }
// }

//------------------------------------------------Start of Rolodex App -----------------------------------------//

//Here is where we are going to start really working on setting up our rolodex. 
// class App extends Component {

// constructor() {
//   super();
// //We set the state of the monsters array with objects that contain the name and an id. It is needed to have an id or a property that can be used as a key within the html so that if the element changes React knows where to go to make that change. 
//   this.state = {
//     monsters: [
//       {
//         name: "First name",
//         id:'ID1'
//       },
//       {
//         name:'Second name',
//         id: 'ID2'
//       },
//       {
//         name:'Thrid name',
//         id: 'ID3'
//       }
//     ]
//   }
// }

//   render() {
//     return (
//       <div className='App'>
//       {
//         // The .map() function used here will go through the monsters array and pick out the id and name setting those to the key and the text of the h1 element respectively. 
//         // More in depth the .map() function is going through the original array and creating a new array based off the callback function that is being called. React takes that array and displays it to the user as new elements added to the DOM. 
//         this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)

        
//       }
      
//       {
//         // Here we can see it does not matter how we affect the created array. But the .map() function will perform the given callback on each of the elements from the original array. 
//         this.state.monsters.map(monster => <h2 key={monster.id}>This is the { monster.name }</h2>)
//       }
//       </div>
  
//     )
//   }
// }
//------------------------------------------------Fetching Data -----------------------------------------//

// // We are normally not going to be hard coding any data into our applications. As a result we normally relay on outside data from APIs or our own server that holds the data that we want. Here we show how that is possible with life cycle method of componentDidMount(). This method is fired as soon as the DOM mounts our application. 
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[]
//     }
//   }
//   // Contained below we see the logic that we want to execute once the componentDidMount() method gets called. We utilize the fetch() call to a website that holds the data that we would like to render to our page. Once we get a response we use make sure that the response is in a format that we can want which is json. This is handled by the .json() method. The last step is to set the state of our monsters array to the data that we have received from the outside site.  
//   componentDidMount() {
//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({ monsters:users }))
//     //.then(users => console.log(users));
//   }
//   render() {
//     return (
//       <div className = 'App'>
//       {this.state.monsters.map(monster => (<h1 key = {monster.id}>{monster.name} lives in {monster.address.city}</h1>))
//       }
//       </div>
//     )
//   }
// }

//------------------------------------------------Building Components -----------------------------------------//
// We will now be working to compartmentalize our application thorough components. Components are the backbone of what makes a good React app. We want to build components that handle a single task or job and can be reused throughout our code base.  
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[]
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
    //.then(users => console.log(users));
  }
  render() {
    return (
      <div className = 'App'>
      {/* The code below is being handled within our App.js. which can be fine. However, when building out our app we want to make sure that the component that is going to be responsible for the handling of generating the information.*/  
      }
      {/*<CardList>
      {this.state.monsters.map(monster => (<h1 key = {monster.id}>{monster.name} lives in {monster.address.city}</h1>))}
      </CardList >*/
      }
      {/*Below we are transferring the information needed to handle the creation of the cards down to the CardList component as a property. */
      }
      <CardList monsters = {this.state.monsters} />
      </div>
    )
  }
}


export default App;
