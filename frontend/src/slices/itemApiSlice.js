import { ITEM_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const itemSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => ({
        url: ITEM_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getItemById: builder.query({
      query: (itemId) => ({
        url: `${ITEM_URL}/${itemId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemSlice;
