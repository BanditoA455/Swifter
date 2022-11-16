import React from 'react';

const PauseButton = ({ isGamePaused, setIsGamePaused, draggable, setDraggable }) => {
    const onClickAction = () => {
        setIsGamePaused(!isGamePaused)
        setDraggable(!draggable)
    }

    return (
        <div className='start-game-button-container'>
            <button
                className='button'
                onClick={onClickAction}
            >
                {isGamePaused ? 'Resume' : 'Pause'}
            </button>
        </div>
    )
}

export default PauseButton