import React from 'react'

const ScoreBoard = ({ score }) => {
    return (
        <div className='score-board'>
            Score: <b>{score}</b>
        </div>
    )
}
export default ScoreBoard