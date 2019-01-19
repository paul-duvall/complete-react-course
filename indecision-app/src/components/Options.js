import React from 'react';
import Option from './Option';

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

export default Options;