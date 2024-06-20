import React from "react";
import "./NavBlock.css";
import { Link } from "react-router-dom";

function NavBlock({ setCurrentPage }: { setCurrentPage: () => void }) {
  return (
    <nav>
      <Link to="/technic">
        <button onClick={setCurrentPage} className="navigation__btn">
          Техника
        </button>
      </Link>
      <Link to="/clothes">
        <button onClick={setCurrentPage} className="navigation__btn">
          Одежда
        </button>
      </Link>
      <Link to="/food">
        <button onClick={setCurrentPage} className="navigation__btn">
          Еда
        </button>
      </Link>
    </nav>
  );
}

export default NavBlock;
