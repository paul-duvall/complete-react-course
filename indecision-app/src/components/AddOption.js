import React from 'react';

export default class AddOption extends React.Component {
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