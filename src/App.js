import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './Contact/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact-Form</h1>
        <ContactForm/>
      </div>
    );
  }
}

export default App;