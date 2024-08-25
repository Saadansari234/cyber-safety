import React from 'react'

const Button = ({name,onclick}) => {
    return (
        <button className="cmn-btn"
        onClick={onclick}
            style={{ cursor: " url(./assets/icon/cursor.png), auto" }}
        >{name}</button>
    )
}

export default Button
