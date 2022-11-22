import React from 'react'

const GameMode = ({ gameMode, selectedGameModeId, setSelectedGameModeId, setHeight, setWidth }) => {

    const setGameModeAndGridSize = () => {
        setSelectedGameModeId(gameMode.id)
        setHeight(gameMode.height)
        setWidth(gameMode.width)
    }

    return (
        <div className={'game-mode'}>
            <div className={`game-mode-name ${selectedGameModeId === gameMode.id ? 'selected-game-mode' : ''}`} onClick={setGameModeAndGridSize}>
                {gameMode.displayName}
            </div>
            <div className={'game-mode-description'}>
                {gameMode.description}
            </div>
        </div>
    )
}

export default GameMode