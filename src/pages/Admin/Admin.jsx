import { Outlet } from "react-router-dom";

//on traite ce composant comme une autre partie de l'application qui aura donc son propre router et ses propres pages voir son propre css
const Admin = () => {

    return (
        <div>
            <h1>Admin</h1>
            <p>header admin</p>
            <Outlet />
            <footer>admin</footer>
        </div>
    )
}


export default Admin;