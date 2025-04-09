export const productCategories = [
  "Educational",
  "Technology",
  "Writing",
  "Office Supplies",
  "Art Supplies",
];

export const allProductCategories = [
  "All",
  "Educational",
  "Technology",
  "Writing",
  "Office Supplies",
  "Art Supplies",
];

const productStock = ["in-stock", "out-of-stock"];

export const productStockOptions = productStock.map((stock) => ({
  label: stock,
  value: stock === "in-stock" ? true : false,
}));

export const productCategoriesOptions = productCategories.map((product) => ({
  value: product,
  label: product,
}));
