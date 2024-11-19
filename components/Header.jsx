// @ts-check

import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header>

      <div>
        <Link className="site-logo" to="/">#VanLife</Link>
      </div>

      <Navbar />
    </header>
  );
}
