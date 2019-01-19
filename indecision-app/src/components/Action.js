import React from 'react';

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

export default Action;