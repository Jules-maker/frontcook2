import {Link} from "react-router-dom";
import {apiDeleteCategory} from "../../../../api/apicategory.jsx";

const ListCategories = ({ categories }) => {
  console.log("LOADlistCat" ,categories);

  async function handleRemoveRecette(evt, id) {
    evt.preventDefault();
    try {
        await apiDeleteCategory(id);
    } catch (e) {
        window.location.reload();
    }
}

  return (
        <div>
            { categories?.map((c) => (
                <div key={c.id}>
                    <p>{c.title}</p>
                    <Link to={`/admin/category/edit/${c.id}`}>Editer</Link>

                    <a onClick={(e) => {
                        if (window.confirm('Delete the item?')) {
                            handleRemoveRecette(e, c.id)
                        }
                    }}>Delete</a>

                </div>
            ))}
        </div>
    );

};



export default ListCategories;

