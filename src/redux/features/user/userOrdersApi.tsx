import { baseApi } from "../../api/baseApi";

const viewUserOrdersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeOrders: builder.query({
      query: () => ({
        url: "/myOrders",
        method: "GET",
      }),
    }),

    createOrder: builder.mutation({
      query: (orderInfo) => {
        if (!orderInfo.email) {
          throw new Error("Email is required to place an order.");
        }
        return {
          url: "/createOrder",
          method: "POST",
          body: orderInfo,
        };
      },
    }),

  }),
});
export const { useGetMeOrdersQuery, useCreateOrderMutation } = viewUserOrdersApi;
