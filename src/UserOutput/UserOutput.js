import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    let {userName} = props;
    userName = (userName.trim() === "" ? "Ingresa un nombre de usuario" : userName);

    return(
        <div className="userCard">
            <p>Username register in github: <b>{userName}</b> </p>
            <p>Esto apenas comienza! <span role="img" aria-label="laugh">🤣</span></p>
        </div>
    );
}

export default userOutput;