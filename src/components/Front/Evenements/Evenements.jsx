import { useState } from 'react';

const Evenements = () => {

    const [count, setCount] = useState(0);
    const [showCount, setShowCount] = useState(true);

    const handleClick = () => {
        console.log('Vous avez cliqué sur le bouton');
        //ne fonctionnera pas 3x des fois on veut ajouter 2 ou 3 avec des conditions
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        //fonctionne 3x car on utilise le prev qui est le dernier état de la variable count  u showcount, on voit le numero, on crée un btn qui met en faux ou vrai et fait disparaitre le count si on click sur le btn showcount on refait apparaitre le count 
        setCount(prev => prev + 1);
        // setCount(prev => prev + 1);
        // setCount(prev => prev + 1);
        

    }
    const toggleShowCount = () => {
        setShowCount(!showCount);
        
    }
    const handleInput = () => {
        console.log(e.target.value);
    }
    const handleBlur = () => {
        console.log('Vous avez quitté le champ : ', e.target.value);
    }
    const handleLink = () => {
        e.preventDefault();
        console.log('Vous avez cliqué sur le lien');
    }
    const handleParameter = (param) => () => {
        console.log(param,"param");
    }
        return (
            <div>
                <h1>Evenements</h1>
                {/* <button onClick={handleClick}>Cliquez ici</button>
        <button onClick={() => alert('Vous avez cliqué sur le bouton')}>Cliquez ici</button> autre façon
        <input type="text" onInput={handleInput} onBlur={handleBlur} />
        <a href="https://jules-giraud.xyz" onClick={handleLink}>lien</a> */}
                <ul>
                    <li>
                        <button onClick={handleParameter(12)}>click w param</button>
                    </li>
                    <li>
                        <button onClick={handleParameter(52)}>btn param2</button>
                    </li>
                    <li>
                        <button onClick={handleClick}>Cliquer pour incrémenter</button>
                        <button onClick={toggleShowCount}> {showCount ? '🙈' : '🙉'}</button>
                        <p hidden={showCount}>{ count }</p>
                        {/* { !showCount && <p>{ count }dzadza</p> } */}
                    </li>
                </ul>

            </div>
        );
    }

    export default Evenements;