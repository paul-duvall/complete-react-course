import React from 'react';

const Action = (props) => (
    <div>
    {/* button is disabled if there are no options available for selection */}
    <button 
      className="big-button"
      onClick={props.handlePick} 
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
    </div>
  );

export default Action;