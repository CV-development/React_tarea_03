import React from 'react'

const Alert = ({ msg, color }) => {
  return (
    <div className='alertMsg'>
      <div className={color}>{msg}</div>
    </div>
  )
}

export default Alert
