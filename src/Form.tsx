import React, { ReactNode, useState } from "react";

export const FormContext = React.createContext({});

export interface IForm {
  children?: ReactNode;
  className?: string;
  schema?: any;
  initialValues?: { [key: string]: any };
  setData?: any;
}

export const Form = ({ children, initialValues, schema, ...props }: IForm) => {
  const [values, setValues] = useState(initialValues ? initialValues : {});
  const [errors, setErrors] = useState({});
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const result = schema.validate(values, { abortEarly: false });
    if (result.error) {
      const error = {};
      result.error.details.map((data: any) => {
        return (error[data.path[0]] = data.message);
      });
      setErrors(error);
    } else {
      setErrors({});
    }
  };

  return (
    <FormContext.Provider value={{ values, setValues, errors }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};
