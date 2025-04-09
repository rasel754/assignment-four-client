/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Space } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PcForm from "../components/form/ScriptForm";
import PcInput from "../components/form/ScriptInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import "../styles/toast.css";

import handleJwtTokenDecode from "../uitls/jwtDecode";
import { useTheme } from "../constants/ThemeContext";
import { userLoginValidation } from "../schemas/user.schema";
const Login = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();



  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loggedin...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });

    try {
      const result = await login(data).unwrap();

      console.log(result);

      if (result?.success && result?.data?.token) {

        const decodedUser = handleJwtTokenDecode(result?.data?.token) as TUser;
        dispatch(setUser({ user: decodedUser, token: result?.data?.token }));

        toast.success(result?.message, {
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "green",
          },
          position: "top-center",
          id: toastId,
          duration: 2000,
        });
        navigate(`/${decodedUser?.role}/dashboard`);
      }
    } catch (err: any) {
      toast.error("Login failed...", {
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
      <PcForm
        onSubmit={handleOnSubmit}
        resolver={zodResolver(userLoginValidation)}
        style={{
          minWidth: "450px",
          padding: "4rem",
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
          Sign In to Your Account
        </h1>
        <p className="text-center py-6" style={{ color: "#99A1AF" }}>
          Sign in to continue your stationery journey.
        </p>

        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          <PcInput
            type="email"
            name="email"
            label="Email:"
            placeholder="Enter your email..."
          />
          <PcInput
            type="password"
            name="password"
            label="Password:"
            placeholder="Enter your password..."
          />

          <Button
            variant="solid"
            htmlType="submit"
            className="w-full bg-[#7E5A9B] text-white hover:bg-[#5C3B6F]"
          >
            Login
          </Button>
        </Space>

        <p
          style={{
            textAlign: "center",
            color: "#99A1AF",
            fontSize: "0.875rem",
            marginTop: "4px",
            padding: "16px",
          }}
        >
          New Here? {"  "}
          <Link
            to={"/register"}
            style={{ textDecoration: "underline", color: "#297AFF" }}
          >
            Register
          </Link>
        </p>
      </PcForm>
    </Flex>
  );
};

export default Login;
