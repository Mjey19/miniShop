import React from "react";
import CardMenu from "../components/CardMenu/CardMenu";
import CardInterface from "../module/CardInterface";
import Pagination from "../components/Pagination/Pagination";
import { useParams } from "react-router";
import {
  useGetItemsQuery,
  useGetTypesItemsQuery,
} from "../redux/state/fetchApi";
import axios from "axios";
function Catalog({
  cardCurrentPage,
  currentPage,
  setCurrentPage,
}: {
  cardCurrentPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const { types } = useParams();
  const { data = [], isLoading } = useGetItemsQuery({
    types,
    limit: cardCurrentPage,
    currentPage: currentPage,
  });
  const totalItems = useGetTypesItemsQuery(types);
  return (
    <>
      {currentPage === 0 ? (
        <h1 style={{ textAlign: "center" }}>Выберите категорию</h1>
      ) : (
        <>
          {isLoading
            ? "...Loading"
            : data.map((items: CardInterface, index: number) => {
                return (
                  <CardMenu
                    key={index}
                    id={items.id}
                    title={items.name}
                    price={items.price}
                    rating={items.rating}
                    img={items.imageUrl}
                  />
                );
              })}
          {totalItems.data && (
            <Pagination
              totalPosts={totalItems.data.length}
              currentPage={(page: number) => setCurrentPage(page)}
              cardCurrentPage={cardCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
}

export default Catalog;
