// This is an ES6 class that uses extend to become a react component
// Note that the uppercase first letter of the class name is enforced with React components
// This is the main component; all the other components are nested within this
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
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
  // Deletes all the items in the options array
  handleDeleteOptions() {
    // This is the short form of setState that takes advantage of the short-form of arrow functions
    // NB that the object needs to be wrapped with regular brackets to ensure it is recognised as an object and not a function
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove)   {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }
  // Selects a random item from the array
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  // Adds a new option to the array
  handleAddOption(option) {
    
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
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        {/* hasOptions is a boolean value based upon whether there are any items in the options array */}
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        {/* The options component needs access to the handleDeleteOptions method. This is enabled by setting the method to the component's props. The option component needs access to the handleDeleteOption method. This will first have to be passed to the Options component before it can be passed down again. */}
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

// Simple components that are only concerned with rendering can be written as 'stateless functional components'
// These components are quicker! The code is more succinct. Easier to read and write.
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Use of && here means that the subtitle header tag is only included in the jsx if the subtitle prop were passed down. If no subtitle were passed down, it would not appear. */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
    {/* button is disabled if there are no options available for selection */}
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do?
    </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>  
      {props.options.length === 0 && <p>Please add an options to get started!</p>}
      {
        // Generate instance of Option component for each option in the options array
        props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
      e.preventDefault();

      // Variable that contains the text field value
      // trim() removes trailing whitespace, meaning that just spaces cannot be submitted successfully
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      
      this.setState(() => ({error: error}));  

      // If there was no error, clear the input
      if(!error) {
        e.target.elements.option.value = '';
      }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: </p>
    </div>
  );
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

