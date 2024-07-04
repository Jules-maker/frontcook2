
const LabelForm = ({ label= '', id= ''}) => {
    return (
        <label htmlFor={id}>
            { label }
        </label>
    );
};

export default LabelForm;
