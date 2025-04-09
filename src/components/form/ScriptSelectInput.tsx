import { Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPcSelactprops = {
  name: string;
  label?: string;
  requiredField?: "true" | "false";
  options: { value: string | number | boolean; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
const ScriptSelectInput = ({
  name,
  label,
  options,
  placeholder,
  disabled,
  className,
}: TPcSelactprops) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item className={className}  label={<span style={{color:"white"}}>{label}</span>}>
            <Select
              disabled={disabled}
              placeholder={placeholder}
              className={className} 
              {...field}
              options={options}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        )}
      ></Controller>
    </>
  );
};

export default ScriptSelectInput;
