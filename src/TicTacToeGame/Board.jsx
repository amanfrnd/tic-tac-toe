import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [value, setValue] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)

    let winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const winnerLogic = () => {
        for (let w of winningCombination) {
            let [a, b, c] = w
            if (value[a] !== null && value[a] === value[b] && value[b] === value[c]) {
                return [true,value[a]]
            }
        }
        return [false,null]
    }

    const [isWinner,winnerName] = winnerLogic()

    const handleClick = (index) => {
        if (value[index] === null) {
            const copyValue = [...value]
            copyValue[index] = isXTurn ? 'X' : 'O'
            setValue(copyValue)
            setIsXTurn(!isXTurn)
        }
    }

    const resetGame=()=>{
        setValue(Array(9).fill(null))
    }

    return (

        <div className='board-container'>
            {
                isWinner ? <>
                    <div style={{marginLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <p>{winnerName} win the game</p>
                        <button className='resetStyle' onClick={resetGame}>Play Again</button>
                    </div>
                </> : <>
                    <h3>Player {isXTurn ? 'X' : 'O'} turn</h3>
                    <div className='board'>
                        <Square onClick={() => handleClick(0)} data={value[0]} />
                        <Square onClick={() => handleClick(1)} data={value[1]} />
                        <Square onClick={() => handleClick(2)} data={value[2]} />
                    </div>
                    <div className='board'>
                        <Square onClick={() => handleClick(3)} data={value[3]} />
                        <Square onClick={() => handleClick(4)} data={value[4]} />
                        <Square onClick={() => handleClick(5)} data={value[5]} />
                    </div>
                    <div className='board'>
                        <Square onClick={() => handleClick(6)} data={value[6]} />
                        <Square onClick={() => handleClick(7)} data={value[7]} />
                        <Square onClick={() => handleClick(8)} data={value[8]} />
                    </div>
                </>
            }

        </div>
    )
}

export default Board
