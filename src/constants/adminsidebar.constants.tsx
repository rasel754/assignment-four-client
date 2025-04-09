import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

export const adminPahts: MenuProps["items"] = [
  {
    key: "dashboard",
    label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "product-management",
    label: "P. Management",
    children: [
      {
        key: "create-product",
        label: <NavLink to={"/admin/create-product"}>Add Products</NavLink>,
      },
      {
        key: "all-products",
        label: <NavLink to={"/admin/products"}>All Products</NavLink>,
      },
    ],
  },
  {
    key: "orderManagement",
    label: "O. Management",
    children: [
      {
        key: "all-orders",
        label: <NavLink to={"/admin/orders"}>All Orders</NavLink>,
      },
    ],
  },
];
