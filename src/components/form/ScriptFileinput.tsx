import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TFileinputprops = {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
};

const ScriptFileinput = ({
  name,
  label,
  placeholder,
  className,
}: TFileinputprops) => {
  
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => {
        return (
          <Form.Item className={className} label={<span style={{ color: "white" }}>{label}</span>}>
            <Input
              {...field}
              type="file"
              onChange={(e) => onChange(e.target.files?.[0])}
              value={value?.fileName}
              placeholder={placeholder}
              className={className}

            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        );
      }}
    ></Controller>
  );
};

export default ScriptFileinput;
