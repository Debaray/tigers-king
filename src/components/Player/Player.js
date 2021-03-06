import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const { name, salary, country, image } = props.player;
    return (
        <div className="player">
            <div className="card-setup">
                <img className="image-setup" src={image} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>Country : {country}</p>
                <p>Salary :${salary}</p>
                <button className="btn btn-success" onClick={() =>props.handleClick(props.player)}>
                    <FontAwesomeIcon icon={faPlusSquare} /> Add to List</button>
            </div>

        </div>
    );
};

export default Player;