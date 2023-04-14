import React, { useState } from 'react'
import Square from './square'
function Home() {
    const [square, setSquare] = useState(Array(9).fill(null))
    const [value, setValue] = useState(true)
    const handleClick = (i) => {
        square[i] = value ? "X" : "O"
        setSquare(square)
        setValue(!value)
    }
return (
    <div className="board">
        <div className="row">
            <Square value={square[0]} onClick={() => handleClick(0)} />
            <Square value={square[1]} onClick={() => handleClick(1)} />
            <Square value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
            <Square value={square[3]} onClick={() => handleClick(3)} />
            <Square value={square[4]} onClick={() => handleClick(4)} />
            <Square value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
            <Square value={square[6]} onClick={() => handleClick(6)} />
            <Square value={square[7]} onClick={() => handleClick(7)} />
            <Square value={square[8]} onClick={() => handleClick(8)} />
        </div>
        {/* <span>{result}</span> */}
    </div>
)
}


export default Home