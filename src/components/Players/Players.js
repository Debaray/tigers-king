import React from 'react';
import { useState, useEffect } from 'react';
import playerData from '../../data/data.json';
import Player from '../Player/Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './Players.css';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer,setSelectedPlayer] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
    }, [])
    const handleClick = (Player) =>{
       const exist = selectedPlayer.find(p => p.name === Player.name);
       if(exist){
           alert(`${Player.name} aleady selected`);
        return;
    }
        const newSelectedPlayer = [...selectedPlayer,Player];
        setSelectedPlayer(newSelectedPlayer);   
    }
    return (
        <div className="all-player">
            <div className="player-container">
                <div className="single-player">
                    {
                        players.map(player => <Player key={player.id} handleClick={handleClick} player={player}></Player>)
                    }
                </div>
            </div>
            <div>
                <SelectedPlayers  selectedPlayer={selectedPlayer}></SelectedPlayers>
            </div>
        </div>
    );
};

export default Players;