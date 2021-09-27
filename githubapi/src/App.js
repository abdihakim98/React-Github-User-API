import './App.css';
import React from 'react';
import Users from './Components/GithubUser';
import axios from 'axios';


class App extends React.Component {
  
  constructor(props) {
    super() 
    this.state = {
      userInfo: []
      
    }
  }
  componentDidMount(){
   axios.get("https://api.github.com/users/duraanali")
   .then(res => {
    this.setState({
      userInfo: [res.data]
    })
    
   })
   .catch((error) => console.log(error))
  }
  render() {
  return (
    <div className="container">
      <h1> Github User Information </h1>
    <div className="App">
     
      <Users myUsers={this.state.userInfo}/>

      </div>
    </div>
  );
}
}
export default App;
