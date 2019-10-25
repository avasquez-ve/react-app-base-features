import React from 'react';

const userInput = (props) => {
    const {defaultVal, change} = props;
    /*css inline*/
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        backgroundColor: "rgb(64, 83, 185)",
        padding: "8px",
        margin: "0 auto"
    }

    const styleLabel = {
        color: "#ffffff",
        fontSize: "18px"
    }

    const styleInput = {
        border: "solid 1px #eaeaea",
        margin: "0 0 0 8px"
    }
    /*end css inline*/

    return (
        <div style={style}>
            <label style={styleLabel}>
                Usuario de Github: 
                <input style={styleInput} onChange={change} value={defaultVal} type="text" placeholder="Ingresa un nombre de usuario" />
            </label>
        </div>
    )
}

export default userInput;