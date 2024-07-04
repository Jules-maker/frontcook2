import { FormEvent, useState } from "react";
import { apiAddCategory } from "../../../api/apicategory";
import FormCategory from "./components/FormCategory";
// respecter les noms de colonnes de la  bdd
const AddCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [dataForm, setDataForm] = useState<Object>({
        title: "",
        content: ""
    });
    const [dataError, setDataError] = useState<Object>({
        title: "",
        content: ""
    });

    async function handleSubmit() {
        evt.preventDefault();
        setIsLoading(true);
        try {
            const data = await apiAddCategory(dataForm);
            console.log(data);
            if(data.status === 400 && !data.success) {
                // error
                setDataError(data.violations)
            } else {
                // success
                setIsSuccess(true);
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false);
        }

    }


    function handleChange(evt){
        console.log(evt.target.value);
        const {name, value} = evt.target; // evite de faire const name = evt.target.name; const value = evt.target.value;


        setDataForm({
            ...dataForm,
            [name]: value
        });

    }



    return (
        <div>
            { isSuccess ? (
                <p>Merci pour votre catégorie.</p>
            ): (
                <FormCategory
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    isLoading={isLoading}
                    dataError={dataError}
                    dataForm={dataForm}
                />
            )}

        </div>
    );

}

export default AddCategory;