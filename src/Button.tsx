export const Button = ({ ...props }) => {
  return (
    <button
      disabled={props.disable ?? false}
      name={props.btnText}
      type={props.type ?? "button"}
    >
      {props.btnText}
    </button>
  );
};
