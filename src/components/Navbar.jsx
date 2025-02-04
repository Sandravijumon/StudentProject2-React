import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FISAT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Student Entry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dlt">Delete Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">View Students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
