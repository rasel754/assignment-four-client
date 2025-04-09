import { Input, Select, Tabs, TabsProps, Typography } from "antd";
import { useState } from "react";
import { GetProps } from "react-redux";
import AllProductsCategory from "../components/ui/AllProductsCategory";
import { allProductCategories } from "../constants/createproduct.constants";
import { useGetAllproductQuery } from "../redux/features/admin/productManagementApi";

const { Title } = Typography;

type TSearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const AllProducts = () => {

  const [sort, setSort] = useState("-createdAt");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [params, setParams] = useState<{ name: string; value: string }[]>([]);

  const { data: products } = useGetAllproductQuery([
    { name: "page", value: page },
    ...params,
  ]);

  console.log(products)

  const productFiterItems: TabsProps["items"] = allProductCategories.map(
    (cat) => ({
      key: cat,
      label: <span className="text-white ">{cat}</span>,
      children:
        category === cat || cat === "All" ? (
          products?.data?.length ? (
            <AllProductsCategory
              products={products?.data}
              meta={products?.meta}
              setPage={setPage}
              page={page}
            />
          ) : (
            <p className="text-center text-white">No data</p>
          )
        ) : null,
    })
  );

  const onSearch: TSearchProps["onSearch"] = (value) => {
    const queryItems = [
      { name: "sort", value: sort },
      { name: "searchTerm", value: value },
    ];
    if (category !== "All") {
      queryItems.push({ name: "category", value: category });
    }
    setParams(queryItems);
    setSearchTerm("");
  };
  const handleChange = (value: string) => {
    setSort(value);
    const queryItems = [
      { name: "sort", value: value },
      { name: "searchTerm", value: searchTerm },
    ];
    if (category !== "All") {
      queryItems.push({ name: "category", value: category });
    }
    setParams(queryItems);
  };
  const onChange = (key: string) => {
    setCategory(key);
    setPage(1);
    const queryItems = [
      { name: "sort", value: sort },
      { name: "searchTerm", value: searchTerm },
    ];
    if (key !== "All") {
      queryItems.push({ name: "category", value: key });
    }
    setParams(queryItems);
  };
  const handleSearchFieldChange = (value: string) => {
    setSearchTerm(value);
    const queryItems = [
      { name: "sort", value: sort },
      { name: "searchTerm", value: value },
    ];
    if (category !== "All") {
      queryItems.push({ name: "category", value: category });
    }
    setParams(queryItems);
  };
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Title level={3} style={{color:"white"}}>EXPLORE ALL PRODUCTS</Title>
        <div style={{ display: "flex", gap: "16px" }}>
          <Search
            allowClear
            style={{ width: "300px" }}
            size="large"
            placeholder="input search text"
            value={searchTerm}
            onChange={(e) => handleSearchFieldChange(e.target.value)}
            onSearch={onSearch}
            enterButton
          />
          <Select
            size="large"
            placeholder="Select Price"
            onChange={handleChange}
            options={[
              { value: "price", label: "Low to high" },
              { value: "-price", label: "High to Low" },
            ]}
          />
        </div>
      </div>
      <Tabs
        defaultActiveKey="All"
        items={productFiterItems}
        // style={{textShadow: "9 9 5px white" }}
        className=" text-white"
        onChange={onChange}
        indicator={{
          size: (origin) => origin - 20,
          align: "center", 
          
        }}      />
    </div>
  );
};

export default AllProducts;
