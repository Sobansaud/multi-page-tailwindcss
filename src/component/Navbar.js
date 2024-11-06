import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-center bg-blue-500 py-4">
      <Link to="/" className="text-white px-4 py-2 text-lg sm:text-xl hover:bg-blue-600 rounded">
        Home
      </Link>
      <Link to="/about" className="text-white px-4 py-2 text-lg sm:text-xl hover:bg-blue-600 rounded">
        About
      </Link>
      <Link to="/skills" className="text-white px-4 py-2 text-lg sm:text-xl hover:bg-blue-600 rounded">
        Skills
      </Link>
      <Link to="/contact" className="text-white px-4 py-2 text-lg sm:text-xl hover:bg-blue-600 rounded">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
