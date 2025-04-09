import { Form, InputNumber } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPcNumberInput = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};
const ScriptNumberInput = ({
  name,
  label,
  placeholder,
  className,
}: TPcNumberInput) => {
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
            <InputNumber
              style={{ width: "100%" }}
              placeholder={placeholder}
              size="large"
              min={1}
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

export default ScriptNumberInput;
