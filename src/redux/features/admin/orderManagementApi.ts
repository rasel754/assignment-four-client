import { baseApi } from "../../api/baseApi";

const orderMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/allOrders",
        method: "GET",
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/order/verify",
        method: "GET",
        params: { order_id },
      }),
    }),
    
    cancleOrder: builder.mutation({
      query: (orderId) => ({
        url: `/cancleOrder/${orderId}`,
        method: "DELETE",
      }),
    }),

    acceptOrder: builder.mutation({
      query: (orderId) => ({
        url: `/acceptOrder/${orderId}`,
        method: "PATCH",
      }),
    }),
  }),
});
export const {
  useGetAllOrderQuery,
  useCancleOrderMutation,
  useAcceptOrderMutation,
  useVerifyOrderQuery,
} = orderMangementApi;
