import React from "react";
import "./NavBlock.css";
import { Link } from "react-router-dom";

function NavBlock({ setCurrentPage }: { setCurrentPage: () => void }) {
  return (
    <nav>
      <Link to="miniShop/technic">
        <button onClick={setCurrentPage} className="navigation__btn">
          Техника
        </button>
      </Link>
      <Link to="miniShop/clothes">
        <button onClick={setCurrentPage} className="navigation__btn">
          Одежда
        </button>
      </Link>
      <Link to="miniShop/food">
        <button onClick={setCurrentPage} className="navigation__btn">
          Еда
        </button>
      </Link>
    </nav>
  );
}

export default NavBlock;
