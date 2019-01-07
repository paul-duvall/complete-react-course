'use strict';

var appRoot = document.getElementById('app');
var visible = false;

// Toggle visibility on click
var onToggleVisibility = function onToggleVisibility() {
  visible = !visible;
  renderVisibilityToggle();
};

var renderVisibilityToggle = function renderVisibilityToggle() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggleVisibility },
      visible ? 'Hide details' : 'Show details'
    ),
    visible && React.createElement(
      'p',
      null,
      'This text is now visible!'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderVisibilityToggle();
