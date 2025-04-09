
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Space } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import "../styles/toast.css";
import { TResponse, TUserRes } from "../types";
import { useTheme } from "../constants/ThemeContext";
import ScriptForm from "../components/form/ScriptForm";
import ScriptInput from "../components/form/ScriptInput";
import { userRegistrationValidation } from "../schemas/user.schema";



const Register = () => {
  
  const { theme } = useTheme();
  const [register] = useRegisterUserMutation();
  const navigate = useNavigate();


  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Register...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    const registerData  = data;

    try {
      const registeredUser = (await register(
        registerData
      )) as TResponse<TUserRes>;
      if (registeredUser?.error) {
        toast.error(registeredUser?.error?.data?.message, {
          id: toastId,
          duration: 2000,
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "red",
          },
          position: "top-center",
        });
      } else {
        toast.success(registeredUser?.data?.message, {
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "green",
          },
          position: "top-center",
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error("Registered failed...", {
        id: toastId,
        duration: 2000,
        style: {
          padding: "10px",
          borderRadius: "8px",
          color: "red",
        },
        position: "top-center",
      });
    }
  };
  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <ScriptForm
        onSubmit={handleOnSubmit}
        resolver={zodResolver(userRegistrationValidation)}
        style={{
          minWidth: "450px",
          padding: "3rem",
          borderRadius: "1.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.9)",
          backgroundColor: theme.primary,
          color: theme.text,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "800",
            color: theme.text,
          }}
        >
          Create Your Account
        </h1>
        <p className="text-center py-4" style={{ color: "#99A1AF" }}>
          Register now for Unlock exclusive stationery perks
        </p>

        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          <ScriptInput
            type="text"
            name="name"
            label="Name:"
            placeholder="Enter your name..."
          />

          <ScriptInput
            type="email"
            name="email"
            label="Email:"
            placeholder="Enter your email..."
          />
          <ScriptInput
            type="password"
            name="password"
            label="Password:"
            placeholder="**************"
          />

          <Button
            variant="solid"
            htmlType="submit"
            className="w-full bg-[#7E5A9B] text-white hover:bg-[#5C3B6F]"
          >
            Sign up
          </Button>
        </Space>
        <p
          style={{
            textAlign: "center",
            color: "#99A1AF",
            fontSize: "0.875rem",
            marginTop: "4px",
            padding: "0.5rem",
          }}
        >
          already have account?{" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "underline",
              color: "#297AFF",
            }}
          >
            Login
          </Link>
        </p>
      </ScriptForm>
    </Flex>
  );
};

export default Register;
