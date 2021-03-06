import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

// This is an ES6 class that uses extend to become a react component
// Note that the uppercase first letter of the class name is enforced with React components
// This is the main component; all the other components are nested within this
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // Deletes all the items in the options array
  handleDeleteOptions = () => {
    // This is the short form of setState that takes advantage of the short-form of arrow functions
    // NB that the object needs to be wrapped with regular brackets to ensure it is recognised as an object and not a function
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  };
  // Selects a random item from the array
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  // Adds a new option to the array
  handleAddOption = (option) => {
    
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
    
    // This is the long-form for using setState (best for multiple changes to the state)
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  // This method fires when the component first gets mounted to the DOM
  // Used here to initialise the app with any data currently held in local storage
  componentDidMount() {
    // try is used to check whether the code runs without throwing an error (this would happen if the data returned by JSON.parse is not valid JSON)
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      // Only runs if the options contains something, ie. if there was something in local storage
      if(options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // If there was an error, do nothing at all!
    }
  }
  // This method fires whenever the component updates
  // Used here to update local storage with any changes made to the options array
  componentDidUpdate(prevProps, prevState) {
    // Only runs if the length of the old array is different to the length of the new array
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  // This method files just before the component leaves the DOM
  componentWillUnmount() {
    console.log('component will unmount');
  }
  
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        {/* hasOptions is a boolean value based upon whether there are any items in the options array */}
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
          />
          {/* The options component needs access to the handleDeleteOptions method. This is enabled by setting the method to the component's props. The option component needs access to the handleDeleteOption method. This will first have to be passed to the Options component before it can be passed down again. */}
          <div className="widget">
            <Options 
              options={this.state.options} 
              handleDeleteOptions={this.handleDeleteOptions} 
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}