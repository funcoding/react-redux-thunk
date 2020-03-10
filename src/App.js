import React from 'react';
import { connect } from 'react-redux';
import {displayMessage, displayAfter5Secs} from './actions';
import './App.css';

class App extends React.Component {
  render(){
    const handleOnClick = {
      immediate: () => this.props.dispatch(displayMessage('I was dispatched immediately.')),
      delayed: () => this.props.dispatch(displayAfter5Secs())
    }
    
    return (
      <div>
        <button type="button" onClick={handleOnClick.immediate}>Dispatch immediately</button>
        <button type="button" onClick={handleOnClick.delayed}>Dispatch after 5 secs</button>
        <h4>{this.props.message}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.displayMessageReducer}
}

export default connect(mapStateToProps)(App);
