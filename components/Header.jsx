// @ts-check

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component with navigation links
 */
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* Add more navigation links here as needed */}
        </ul>
      </nav>
    </header>
  );
}
