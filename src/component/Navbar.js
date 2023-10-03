import React from 'react';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-danger" style={{ position: 'sticky', top: '0', zIndex: '100' , marginBottom:'10px'}}>
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn button-primary mr-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
