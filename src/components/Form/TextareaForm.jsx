import LabelForm from "./LabelForm";
import ErrorForm from "./ErrorForm";

const TextareaForm = ({label = '', name,id, value,placeholder = '',errormessage = '',handleChange}) => {
    return (
        <>
            { label && <LabelForm label={label} id={id}/> }
            <textarea
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <ErrorForm message={errormessage}/>
        </>
    );
};

export default TextareaForm;
