import React from 'react'

const Path = ({title}) => {
  return (
    <div className='path-container' 
    style={{cursor:" url(./assets/icon/cursor.png), auto"}}
    ><span className='straight-line'></span> <span className='path'>{title}</span></div>
  )
}

export default Path
