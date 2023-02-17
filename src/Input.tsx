import { useContext } from "react";
import { FormContext } from "./Form";

const errorStyle = {
  padding: "4px",
  fontSize: "14px",
  color: "red"
};

export const Input = ({ name, ...props }: any) => {
  const { values, setValues, errors }: any = useContext(FormContext);

  const handleChange = (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <>
      <input
        name={name}
        value={values[name] || ""}
        onChange={handleChange}
        {...props}
      />
      {errors && <div style={{ ...errorStyle }}>{errors[name]}</div>}
    </>
  );
};
