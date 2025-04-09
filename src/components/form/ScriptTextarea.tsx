import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useFormContext } from "react-hook-form";

type TPcTextarea = {
  name: string;
  label?: string;
  rows: number;
  placeholer?: string;
  className?: string;
};
const ScriptTextarea = ({ name, label, rows, placeholer ,className}: TPcTextarea) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control} //optional because use form provider
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item className={className}  label={<span style={{ color: "white" }}>{label}</span>}>
            <TextArea
              placeholder={placeholer}
              size="large"
              rows={rows}
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

export default ScriptTextarea;
