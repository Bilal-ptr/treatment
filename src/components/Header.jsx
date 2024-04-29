// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container fixed w-full ">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <h1 className="">
          <Link to="/">My App</Link>
        </h1>
        <nav>
          <ul className="space-x-4 flex ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/disease">Disease</Link>
            </li>
            <li>
              <Link to="/treatment">Treatment</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;