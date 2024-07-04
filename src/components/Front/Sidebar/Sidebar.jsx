const SideBar = ({ nom, age, majeur = false }) => {
    // const {nom,age} = props;
    
    return (
        <div>
            <p>Sidebar</p>
            {majeur ? (
                <p>Vous êtes majeur</p>
            ) : (
                <p>Vous êtes mineur</p>
            )}


            <p>Nom : {nom}, Age : {age} </p>



            {/* <p>Nom : {props.nom}, Age : {props.age} </p> */}
        </div>
    )

}

export default SideBar;