
import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Cards';


class App extends Component  {

    constructor (props){
      super()
      this.state = {
      
      }
    }

   
 
  render() {
    let appName = 'My To-do App'
    return (
      <div className="App">
        WELCOME
        
        <Cards data={appName} /> 
        

        
      </div>
    );
  }
}

export default App;
