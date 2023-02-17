import "./styles.css";
import { Form } from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .email({
      tlds: { allow: ["com"] }
    })
    .required(),
  password: Joi.string().min(6).required()
});

export default function App() {
  return (
    <Form className="app" schema={schema}>
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <Button btnText="Submit" type="submit" />
    </Form>
  );
}
