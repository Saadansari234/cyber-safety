import React from 'react'

const Button = ({name}) => {
    return (
        <button className="cmn-btn"
            style={{ cursor: " url(./assets/icon/cursor.png), auto" }}
        >{name}</button>
    )
}

export default Button
