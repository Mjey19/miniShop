import React from "react";
import "./CardMenu.css";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/slice/DrawerSlice";
function CardMenu({id, title, price, rating, img }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img className="card-img" src={img} alt="" />
      <h2 className="title">{title}</h2>
      <ul>
        <li className="rating">{rating} / 5.0</li>
        <li className="price">{price} $</li>
      </ul>
      <button
        className="add-card"
        onClick={() => dispatch(addCard({id, title, price, rating, img }))}
      >
        В корзину
      </button>
    </div>
  );
}

export default CardMenu;
