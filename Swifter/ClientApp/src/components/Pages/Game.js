import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameManager from '../GameManagement/GameManager';
import StartGameButton from '../GameManagement/Buttons/StartGameButton';

const Game = () => {
    const [gameScore, setGameScore] = useState(0)
    const [moveCount, setMoveCount] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [selectedGameMode, setSelectedGameMode] = useState({})
    const [isGamePaused, setIsGamePaused] = useState(true)
    const [draggable, setDraggable] = useState(true)
    const [hasGameStarted, setHasGameStarted] = useState(false)
    const [hasGameEnded, setHasGameEnded] = useState(false)

    const { height, width, selectedGameModeId } = useParams()
    

    useEffect(() => {
        setSelectedGameMode('standard')
    }, [])

    return (
        <div>

            <h1>Game page</h1>
            <p>This is the game page.</p>

            {!hasGameStarted &&
                <StartGameButton
                    setHasGameStarted={setHasGameStarted}
                    setIsGamePaused={setIsGamePaused}
                />
            }

            {hasGameStarted &&
                <GameManager
                    height={height}
                    width={width}
                    selectedGameMode={selectedGameMode}
                    moveCount={moveCount}
                    setMoveCount={setMoveCount}
                    timeElapsed={timeElapsed}
                    draggable={draggable}
                    setDraggable={setDraggable}
                    isGamePaused={isGamePaused}
                    setIsGamePaused={setIsGamePaused}
                    setHasGameEnded={setHasGameEnded}
                    setGameScore={setGameScore}
                    hasGameEnded={hasGameEnded}
                />
            }

        </div>
    );
}

export default Game;