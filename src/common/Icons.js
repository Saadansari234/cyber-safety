import React from 'react'

export const StraightIcon = ({title,icon}) => {
    return (
        <div className='straight-icon-btn' style={{cursor:" url(./assets/icon/cursor.png), auto"}}>
            <img src={icon} />
            <div>{title}</div>
        </div>
    )
}

export const WideIconleft = ({title,icon}) => {
    return (
        <div className='wide-icon-btn' style={{cursor:" url(./assets/icon/cursor.png), auto"}}>
            <img src={icon} />
            <div>{title}</div>
        </div>
    )
}


export const WideIconright = ({title,icon}) => {
    return (
        <div className='wide-icon-btn' style={{cursor:" url(./assets/icon/cursor.png), auto"}}>
            <div>{title}</div>
            <img src={icon} />
        </div>
    )
}

