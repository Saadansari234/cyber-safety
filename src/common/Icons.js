import React from 'react'

export const StraightIcon = ({title,icon,onClick}) => {
    return (
        <div className='straight-icon-btn' style={{cursor:" url(./assets/icon/cursor.png), auto"}} 
        onClick={onClick}
        >
            <img src={icon} />
            <div>{title}</div>
        </div>
    )
}

export const WideIconleft = ({title,icon,onClick}) => {
    return (
        <div className='wide-icon-btn' style={{cursor:" url(./assets/icon/cursor.png), auto"}}
        onClick={onClick}
        >
            <img src={icon} />
            <div>{title}</div>
        </div>
    )
}


export const WideIconright = ({title,icon,onClick}) => {
    return (
        <div className='wide-icon-btn' style={{cursor:" url(./assets/icon/cursor.png), auto"}}
        onClick={onClick}
        >
            <div>{title}</div>
            <img src={icon} />
        </div>
    )
}

