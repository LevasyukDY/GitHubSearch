import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-zinc-800 text-white">
      <h3 className="font-bold">GitHub Search</h3>
      <span>
        <Link
          to="/"
          className="mr-5 hover:border-b-2"
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className="hover:border-b-2"
        >
          Favourites
        </Link>
      </span>
    </nav>
  );
}
