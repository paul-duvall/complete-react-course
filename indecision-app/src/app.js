console.log('app');

const app = {
  title: 'Indecision App',
  subtitle: 'The app for people who can\'t stand making decisions!',
  options: ['One', 'Boogaloo']
};

function displayOptions(options){
  if (options.length > 0){
    return <div><p>Here are your options:</p>
          <ul>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
          </ul></div>
  } else {
    return <p>No options</p>
  }
}

// JSX - JavaScript XML
// This is a JavaScript extension included within React
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {displayOptions(app.options)}
</div>
);

const user = {
  name: 'Mikey',
  age: 26,
  location: 'France'
};

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>  
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
