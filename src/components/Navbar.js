import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://static-00.iconduck.com/assets.00/person-icon-512x483-d7q8hqj4.png" width="" height="" alt="Person Logo" />
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
