import {useEffect, useState} from "react";
import {getAllCategories} from "../../../api/apicategory.jsx";
import ListCategories from "./components/ListCategories.jsx";
import Loader from "../../../components/Loader/Loader.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import {Link} from "react-router-dom";

const Category = () => {
    const [link, setLink] = useState('');
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState(null);


    function handlePagination(l) {
        console.log(l)
        setLink(l.url)
    }
    useEffect(() => {
        let shouldCancel = false;
        setLoading(true);
        async function getCategories(link) {
            try {
                const data = await getAllCategories(link);
                 console.log(data);
                if(!shouldCancel) {
                    setCategories(data.category);
                    setPagination(data.pagination);
                }
            } catch (e) {
                console.log(e)
            } finally {
                if(!shouldCancel) {
                    setLoading(false);
                }
            }
        }
        getCategories(link);
        return () => {
            shouldCancel = true;
        }
    }, [link]);

    return (
        <div>
            <h1>Mes categories -  Admin</h1>
            <Link to="/admin/category/add">Ajouter recette</Link>
            { loading ? (
                <Loader />
            ):(
                <>
                    <Pagination pagination={pagination} changePagination={handlePagination}/>
                    <ListCategories categories={categories}/>
                </>
            )}

        </div>
    );
};

export default Category;