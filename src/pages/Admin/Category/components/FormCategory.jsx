import InputForm from "../../../../components/Form/InputForm.jsx";
import TextareaForm from "../../../../components/Form/TextareaForm.jsx";

const FormCategory = ({handleSubmit,dataForm, handleChange,dataError,isLoading}) => {
    return (
        <form onSubmit={handleSubmit} className="wrapform">
            <InputForm
                id="cat_title"
                name="title"
                type="text"
                value={dataForm.title}
                handleChange={handleChange}
                label="Titre"
                errormessage={dataError.title}
            />

            <TextareaForm
                id="cat_content"
                name="content"
                value={dataForm.content}
                handleChange={handleChange}
                label="Contenu"
                errormessage={dataError.content}
            />

            <button disabled={isLoading} type="submit">
                {isLoading ? 'Loading ....' : 'Ajouter'}
            </button>

        </form>
    );
};

export default FormCategory;