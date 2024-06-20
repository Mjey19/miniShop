import "./DrawerCard.css";
import { useDispatch } from "react-redux";
import { increaseCount, removeCard, decreaseCount } from "../../redux/slice/DrawerSlice";
function DrawerCard({ id, title, price, rating, img, count }) {
  const dispatch = useDispatch();
  return (
    <div className="drawer-card">
      <img src={img} alt="" />
      <div className="card-info">
        <h2 className="title">{title}</h2>
        <ul>
          <li className="rating">{rating} / 5.0</li>
          <li className="price">{price} $</li>
        </ul>
      </div>
      <div className="change-block">
        <button className="minus" onClick={() => dispatch(decreaseCount(id))}>-</button>
        <span className="count">{count}</span>
        <button className="plus" onClick={() => dispatch(increaseCount(id))}>
          +
        </button>
      </div>
      <button className="delete-card" onClick={() => dispatch(removeCard(id))}>
        Удалить
      </button>
    </div>
  );
}

export default DrawerCard;
