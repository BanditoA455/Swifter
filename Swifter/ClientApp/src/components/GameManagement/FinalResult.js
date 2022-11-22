import React from 'react'

const FinalResult = ({ score, timeElapsed, moveCount }) => {
    return (
        <div className='final-result-container'>
            <h3><b>The game has finished!</b></h3>
            <p>Your score: <b>{score}</b></p>
            <p>Total time: <b>{timeElapsed}</b></p>
            <p>Total moves: <b>{moveCount}</b></p>
        </div>
    )
}
export default FinalResult