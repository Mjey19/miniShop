// import React from "react";
import DrawerCard from "../DrawerCard/DrawerCard";
import "./Drawer.css";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../../redux/slice/DrawerSlice";
function Drawer() {
  const drawerCards = useSelector((state) => state.drawer.drawerArr);
  // const summ = useSelector((state) => state.drawer.summ);
  const dispatch = useDispatch();
  
  const totalSumm = () => {
    return drawerCards.reduce((acc,curr) => acc + curr.price * curr.count, 0)
  }

  
  return (
    <div className="drawer">
      <div className="top-inner">
        <button className="close-menu" onClick={() => dispatch(openCart())}>
          Закрыть
        </button>
        <h2>Корзина</h2>
      </div>
      <div className="drawer-inner">
        {drawerCards.map((item, index) => {
          return <DrawerCard key={index} {...item} count={item.count} />;
        })}
      </div>
      <h2 style={{ textAlign: "center" , marginTop: "20px"}}>Сумма: {totalSumm()}$</h2>
    </div>
  );
}

export default Drawer;
