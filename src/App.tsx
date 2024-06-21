import React from "react";
import "./App.css";
import CardMenu from "./components/CardMenu/CardMenu";
import Drawer from "./components/Drawer/Drawer";
import NavBlock from "./components/NavBlock/NavBlock";
import Catalog from "./pages/Catalog";
import PageError from "./pages/PageError";

import CardInterface from "./module/CardInterface";

import { useSelector, useDispatch } from "react-redux";
import { openCart } from "./redux/slice/DrawerSlice";
import Pagination from "./components/Pagination/Pagination";
import axios from "axios";
import { Route, Routes, useParams } from "react-router";

const CARD_COUNT = 8;

function App() {
  const isOpenCart = useSelector((state: any) => state.drawer.isOpen);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="wrapper">
      {isOpenCart && <Drawer />}
      <button className="menu__btn" onClick={() => dispatch(openCart())}>
        Корзина
      </button>
      <NavBlock setCurrentPage={() => setCurrentPage(1)} />

      <div className="card-inner">
        <Routes>
          <Route
            path="/miniShop/:types"
            element={
              <Catalog
                cardCurrentPage={CARD_COUNT}
                currentPage={currentPage}
                setCurrentPage={(page: number) => setCurrentPage(page)}
              />
            }
          />
          <Route
            path="/miniShop"
            element={
              <Catalog
                cardCurrentPage={CARD_COUNT}
                currentPage={0}
                setCurrentPage={(page: number) => setCurrentPage(page)}
              />
            }
          />
          <Route path="*" element={<PageError />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
