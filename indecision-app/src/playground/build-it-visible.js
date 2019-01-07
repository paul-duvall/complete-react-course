
const appRoot = document.getElementById('app');
let visible = false;

// Toggle visibility on click
const onToggleVisibility = () => {
  visible = !visible;
  renderVisibilityToggle();
};

const renderVisibilityToggle = () => {

  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggleVisibility}>
        {visible ? 'Hide details' : 'Show details'}
      </button>
      {visible && <p>This text is now visible!</p>}
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderVisibilityToggle();


