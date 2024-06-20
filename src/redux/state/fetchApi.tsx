import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchApi = createApi({
  reducerPath: "fetchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://boomq-store-server.vercel.app/",
  }),

  endpoints: (build) => ({
    getItems: build.query({
      query: (obj) =>
        `products?type=${obj.types}&_page=${obj.currentPage}&_limit=${obj.limit}`,
    }),
    getTypesItems: build.query({
      query: (types) => `products?type=${types}`,
    }),
  }),
});
export const { useGetItemsQuery, useGetTypesItemsQuery } = fetchApi;
