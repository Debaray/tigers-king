import React from 'react';
import './SelectedPlayers.css';
const SelectedPlayers = (props) => {
    let i = 0;
    const allSelectedPlayer = props.selectedPlayer;
    const totalBudget = allSelectedPlayer.reduce((sum,player)=>sum+player.salary,0)
    return (
        <div className="main-container">
            <h4 >Selected Players Summary</h4>
            <p>Players Selected : {allSelectedPlayer.length}</p>
            {
                allSelectedPlayer.map(pN =><p>{++i}. Name: {pN.name} <br/>&ensp; Salary: ${pN.salary}</p>)
            }
            <h4>Total Budget :${totalBudget}</h4>
        </div>
    );
};

export default SelectedPlayers;