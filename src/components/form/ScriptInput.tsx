import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPcInput = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};
const ScriptInput = ({
  type,
  name,
  label,
  placeholder,
  className,
}: TPcInput) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control} //optional because use form provider
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            className={className}
            label={<span style={{ color: "white" }}>{label}</span>}
          >
            <Input
              placeholder={placeholder}
              size="large"
              type={type}
              className={className} 
              {...field}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        )}
      ></Controller>
    </>
  );
};

export default ScriptInput;
