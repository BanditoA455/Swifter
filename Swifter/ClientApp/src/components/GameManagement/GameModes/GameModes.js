import React, { useEffect, useState } from 'react'
import GameMode from './GameMode'

const GameModes = ({ selectedGameModeId, setSelectedGameModeId, setHeight, setWidth }) => {
    const [gameModes, setGameModes] = useState([])

    useEffect(() => {
        getAllGameModes()
        async function getAllGameModes() {
            const response = await fetch('api/GameModes/GetAll')
            const data = await response.json()
            setGameModes(data)
        }
    }, [])

    return (
        <div className="game-modes">
            {gameModes.map((gameMode) => {
                return (
                    <GameMode
                        gameMode={gameMode}
                        selectedGameModeId={selectedGameModeId}
                        setSelectedGameModeId={setSelectedGameModeId}
                        setHeight={setHeight}
                        setWidth={setWidth}
                    />
                )
            })}
        </div>
    )
}

export default GameModes