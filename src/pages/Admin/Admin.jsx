import { Outlet } from "react-router-dom";
import { React } from "react";
// import FooterAdmin from "../../components/Front/Footer/FooterAdmin";
//on traite ce composant comme une autre partie de l'application qui aura donc son propre router et ses propres pages voir son propre css
const Admin = () => {

    return (
        <>
            {/* <HeaderAdmin /> */}
            <div className="flex-1">
                <h1>Admin</h1> {/*a mettre ds le composant Dashboard */}
                <p>header admin</p>
                <Outlet />
            </div>
                {/* <FooterAdmin/> */}
            
        </>
    )
}


export default Admin;