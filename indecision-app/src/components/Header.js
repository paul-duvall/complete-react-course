import React from 'react';

// Simple components that are only concerned with rendering can be written as 'stateless functional components'
// These components are quicker! The code is more succinct. Easier to read and write.
const Header = (props) => (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {/* Use of && here means that the subtitle header tag is only included in the jsx if the subtitle prop were passed down. If no subtitle were passed down, it would not appear. */}
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>  
  );

Header.defaultProps = {
  title: 'Indecision'
}

export default Header;