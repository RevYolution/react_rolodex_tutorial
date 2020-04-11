//These are our import statements. They hold the information that we need within the statements so we can use them later. They also allow the file to use anything that is imported this way. 
import React, {Component} from 'react';
import logo from './logo.svg';
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
      {this.state.monsters.map(monster => (<h1 key = {monster.id}>{monster.name}</h1>
        ))
      }
      </div>
    )
  }
}

export default App;
