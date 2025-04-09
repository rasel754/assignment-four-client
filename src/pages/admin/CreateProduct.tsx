import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Col, Row, Typography } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import {
  productCategoriesOptions,
  productStockOptions,
} from "../../constants/createproduct.constants";
import { useCreateProductMutation } from "../../redux/features/admin/productManagementApi";
import { createProductValidationSchmea } from "../../schemas/product.schema";
import { TProduct, TResponse } from "../../types";
import { uploadImageToCloudinary } from "../../uitls/uploadImage";
import ScriptSelectInput from "../../components/form/ScriptSelectInput";
import { useTheme } from "../../constants/ThemeContext";
import ScriptNumberInput from "../../components/form/ScriptNumberInput";
import ScriptInput from "../../components/form/ScriptInput";
import ScriptFileinput from "../../components/form/ScriptFileinput";
import ScriptTextarea from "../../components/form/ScriptTextarea";
import ScriptForm from "../../components/form/ScriptForm";

const { Title } = Typography;

const CreateProduct = () => {
  const { theme } = useTheme();
  const [createProduct] = useCreateProductMutation();

  const createProductOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Product...", {
      style: {
        backgroundColor: theme.primary,
        color: theme.text,
        padding: "16px",
        borderRadius: "8px",
        border: `1px solid ${theme.text}20`
      },
      position: "top-center",
    });
    
    try {
      const imageUrl = await uploadImageToCloudinary(data?.image);
      const product = {
        name: data?.name,
        brand: data?.brand,
        price: data?.price,
        category: data?.category,
        image: imageUrl,
        description: data?.description,
        quantity: data?.quantity,
        inStock: data?.inStock,
      };

      const result = (await createProduct(product)) as TResponse<TProduct>;
      
      if (result?.error) {
        console.log(result)
        toast.error(result.error.data.message, {
          id: toastId,
          duration: 2000,
          style: {
            backgroundColor: "#ff4d4f",
            color: "white",
            padding: "16px",
            borderRadius: "8px"
          }
        });
      } else {
        toast.success(result?.data?.message, {
          id: toastId,
          duration: 2000,
          style: {
            backgroundColor: "#52c41a",
            color: "white",
            padding: "16px",
            borderRadius: "8px"
          }
        });
      }
    } catch (err) {
      console.log(err)
      toast.error("Product creation failed!", {
        id: toastId,
        duration: 2000,
        style: {
          backgroundColor: "#ff4d4f",
          color: "white",
          padding: "16px",
          borderRadius: "8px"
        }
      });
    }
  };

  return (
    <div className="p-6 rounded-lg" style={{ 
      backgroundColor: theme.primary,
      color: theme.text
    }}>
      <Title level={3} className="!text-white !mb-6 text-center">
        Add New Product
      </Title>
      
      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <div className="p-6 rounded-lg" style={{ 
            backgroundColor: '#3A2C4D',
            border: `1px solid ${theme.text}20`
          }}>
            <ScriptForm
              onSubmit={createProductOnSubmit}
              resolver={zodResolver(createProductValidationSchmea)}
            >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <ScriptInput
                    type="text"
                    name="name"
                    label="Product Title"
                    placeholder="Enter product title..."
                    className=" opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col xs={24} md={12}>
                  <ScriptInput
                    type="text"
                    name="brand"
                    label="Brand"
                    placeholder="Enter brand name..."
                    className="opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col xs={24} md={12}>
                  <ScriptNumberInput
                    name="price"
                    label="Price ($)"
                    placeholder="Enter price..."
                    className="opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col xs={24} md={12}>
                  <ScriptSelectInput
                    name="category"
                    label="Category"
                    options={productCategoriesOptions}
                    placeholder="Select category"
                    className="opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col xs={24} md={12}>
                  <ScriptSelectInput
                    name="inStock"
                    label="Stock Status"
                    options={productStockOptions}
                    placeholder="Select status"
                    className="opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col span={24}>
                  <ScriptNumberInput
                    name="quantity"
                    label="Quantity"
                    placeholder="Enter quantity..."
                    className="opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col span={24}>
                  <ScriptFileinput 
                    name="image" 
                    label="Product Image" 
                    className="text-black"
                  />
                </Col>
                
                <Col span={24}>
                  <ScriptTextarea
                    name="description"
                    label="Description"
                    rows={4}
                    placeholer="Enter product description..."
                    className="opacity-0.5 border-white/10 text-black"
                  />
                </Col>
                
                <Col span={24} className="flex justify-center mt-4">
                  <Button 
                    htmlType="submit" 
                    className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-bold h-12 px-8"
                  >
                    Create Product
                  </Button>
                </Col>
              </Row>
            </ScriptForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreateProduct;