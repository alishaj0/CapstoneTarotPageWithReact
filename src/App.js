import React from 'react';
import { Component } from 'react'
import OneCardDraw from './one-card-draw/OneCardDraw';
import AddDrawButton from './add-draw-button/AddDrawButton';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

 
  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
    })
  }
  render() {


    return (
      <div className="App">
        <div className="App-Name">
          <h1>Rose Tarot</h1>
          <h2>by alishaj0</h2>
          {/* <br/> */}
          <div className="App-Name-Focus"> 
          <p>Welcome to my tarot page.</p>
          <p> I invite you to clear your mind and take a few deep, cleansing breaths. </p>
          <p>Focus on your question and enjoy!</p>
          </div>
          <br/>
        </div>
        <div className="App-Draw">
          <div className="App-Draw-One">
            <p>1 Card Draw</p>
            <br/>
            {this.state.isEmptyState && <AddDrawButton style={{
              alignSelf:"center"
            }} addTrip={this.triggerAddTripState} />}
            {this.state.isAddTripState && <OneCardDraw />}
            <br/>
          </div>

           <div className="App-Draw-Two">
            <p>3 Card Draw</p>
            <p>Past, Present, Future</p>
            <br/>
            <button>Draw</button>
            <br/>
          </div> 
        </div>

      </div>
    );
  }
}
export default App;


/*
 import { 
   BrowserRouter as Router, 
   Switch,
   Route,
   Link,
  } from 'react-router-dom';
export default function App () {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/'>Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home () {
  return <h2>HOme</h2>
}

function About () {
  return <h2>About</h2>
}

function Users () {
  return <h2>Users</h2>
}
*/