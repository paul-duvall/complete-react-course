
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleVisibility = this.onToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  onToggleVisibility() {
    console.log('toggled!');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>This text is now visible!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');
// let visible = false;

// // Toggle visibility on click
// const onToggleVisibility = () => {
//   visible = !visible;
//   renderVisibilityToggle();
// };

// const renderVisibilityToggle = () => {

//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggleVisibility}>
//         {visible ? 'Hide details' : 'Show details'}
//       </button>
//       {visible && <p>This text is now visible!</p>}
//     </div>
//   );
  
//   ReactDOM.render(template, appRoot);
// };

// renderVisibilityToggle();


