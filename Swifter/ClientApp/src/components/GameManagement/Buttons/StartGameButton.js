import React from 'react'

const StartGameButton = ({ setHasGameStarted, setIsGamePaused }) => {

    const onClickAction = () => {
        setHasGameStarted(true)
        setIsGamePaused(false)
    }

    return (
        <div className='start-game-button-container'>
            <button
                className='start-game-button button'
                onClick={onClickAction}
            >
                Start game
            </button>
        </div>
    )
}

export default StartGameButton