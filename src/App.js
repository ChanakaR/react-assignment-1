import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInputComponent from './Components/UserInput';
import UserOutputComponent from './Components/UserOutput';

class App extends Component {
  state={
    username:"chanaka",
  }

  inputChangeEventHandler = (event)=>{
    this.setState(
      {
        username: event.target.value,
      }
    );
  }

  render(){
    return (
      <div className="App">
        <UserInputComponent onchangehandler={this.inputChangeEventHandler} startValue={this.state.username}></UserInputComponent>
        <UserOutputComponent username={this.state.username}></UserOutputComponent>
      </div>
    );
  }
  
}

export default App;
