import React from 'react'

function Square({value,onClick}) {
  return (
    <div>
        <button style={{width:"40px",height:"40px"}} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square