// import React from "react";
import Header from "../components/Front/Header/Header";
import { useState } from "react";
const Molki = () => {
    const [startGame, setStartGame] = useState(false);
    const [turn, setTurn] = useState("team1");
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [scoreTeam1, setScoreTeam1] = useState(0);
    const [scoreTeam2, setScoreTeam2] = useState(0);

    const assignPlayersName = (e:any) => {
        e.preventDefault();
        console.log('form submitted');
        setTeam1(e.target.team1.value);
        setTeam2(e.target.team2.value);

    }
    const playGame = () => {
        if(!startGame) setStartGame(true);
        console.log('debut du jeu');
        let random = Math.floor(Math.random() * 12) +1; // entre 1 et 12
        //a qui est ce le tour
        if(turn === "team1") {
            setScoreTeam1(scoreTeam1 + random);
            setTurn("team2");
        } else {
            setScoreTeam2(scoreTeam2 + random);
            setTurn("team1");
        }

        

    }
    const resetGame = () => {
        setStartGame(false);
        setTurn("team1");
        setTeam1([]);
        setTeam2([]);
        setScoreTeam1(0);
        setScoreTeam2(0);
    }
    const winner = scoreTeam1 >= 50 ? team1 : scoreTeam2 >=50 ? team2 : null;

    return (
        <div>
            <h1>Jeu du molki</h1>
            <p>Tout d'abord quelles sont les équipes ?</p>
            <form onSubmit={assignPlayersName}>
                <input type="text" name="team1" placeholder="Equipe 1"/>
                <input type="text" name="team2" placeholder="Equipe 2"/>
                <button type="submit">OK ?</button>
            </form>
            <button onClick={playGame}>Play</button>
            <p>Score {team1}: {scoreTeam1}</p>
            <p>Score {team2}: {scoreTeam2}</p>
            {winner && <p>L'équipe gagnante est... {winner} !</p>}
            <button onClick={resetGame}>Reset</button>
        </div>
    );
}


export default Molki;