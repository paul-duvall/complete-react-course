// This is an ES6 class that uses extend to become a react component
// Note that the uppercase first letter of the class name is enforced with React components
// This is the main component; all the other components are nested within this
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing four']
    };
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        {/* hasOptions is a boolean value based upon whether there are any items in the options array */}
        <Action hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
      <button 
        onClick={this.handlePick}
        disabled={!this.props.hasOptions}
      >
        What should I do?
      </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('Remove all clicked');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button>  
        {
          // Generate instance of Option component for each option in the options array
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
      e.preventDefault();

      // Variable that contains the text field value
      // trim() removes trailing whitespace, meaning that just spaces cannot be submitted successfully
      const option = e.target.elements.option.value.trim();

      // Check to see if a value was inputted
      if(option){
        alert(option);
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

