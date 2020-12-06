import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to='/radar'>
        <button>Radar</button>
      </Link>
      <Link to='/bar'>
        <button>Bar</button>
      </Link>
    </div>
  );
}
