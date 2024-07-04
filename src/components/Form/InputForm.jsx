import LabelForm from "./LabelForm";
import ErrorForm from "./ErrorForm";

const InputForm = ({ type = 'text', label = '', name, id, value, placeholder = '', errormessage = '', handleChange }) => {
  return (
    <>
      {label && <LabelForm label={label} id={id} />}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <ErrorForm message={errormessage} />

    </>
  );
};

export default InputForm;