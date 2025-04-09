/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TpcFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TPcFormprops = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  style?: Record<string, unknown>;
} & TpcFormConfig;

const ScriptForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
  style,
}: TPcFormprops) => {
  const phformConfig: TpcFormConfig = {};

  if (defaultValues) {
    phformConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    phformConfig["resolver"] = resolver;
  }


  const methods = useForm(phformConfig);


  const submit: SubmitHandler<FieldValues> = (data) => {

    onSubmit(data);

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form
        style={style}
        layout="vertical"
        onFinish={methods.handleSubmit(submit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default ScriptForm;
