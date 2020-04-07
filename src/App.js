//These are our import statements. They hold the information that we need within the statements so we can use them later. They also allow the file to use anything that is imported this way. 
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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

// We can instead of using a function to return our desired html we can set up a class through Component. This allows use to use the state of the component. State is similar to props, but it is private and fully controlled by the component.
class App extends Component {
// Constructor functions are typically used for two things: Initializing local state by assigning an object to this.state or Binding event handler methods to an instance. Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead. Here we can see we are using it for local state and with our button we are using an event handler to change the state. 
  constructor(){
    super();
    this.state = {
      welcomeString:'Welcome to the React tutorial'
    }
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.welcomeString} 
        </p>
        <button onClick ={() => this.setState({welcomeString:'Let us see what we can do'})}>Click to change text</button>
      </header>
    </div>
    );
  }
}

export default App;
