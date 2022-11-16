import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../GamePage/Header'
import GameManager from '../GameManagement/GameManager'
import TimeCounter from '../GameManagement/TimeCounter'
import MoveCounter from '../GameManagement/MoveCounter'
import ScoreBoard from '../GameManagement/ScoreBoard'
import StartGameButton from '../GameManagement/Buttons/StartGameButton';
import PauseGameButton from '../GameManagement/Buttons/PauseGameButton'

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

            <Header
                height={height}
                width={width}
                gameModeName={selectedGameMode.displayName}
            />

            {!hasGameStarted &&
                <StartGameButton
                    setHasGameStarted={setHasGameStarted}
                    setIsGamePaused={setIsGamePaused}
                />
            }

            {hasGameStarted && !hasGameEnded &&
                <div className='game-information-container'>
                    <div className='game-information'>
                        <MoveCounter
                            moveCount={moveCount}
                        />
                        <TimeCounter
                            timeElapsed={timeElapsed}
                            setTimeElapsed={setTimeElapsed}
                            isGamePaused={isGamePaused}
                        />
                    </div>
                    <div className='game-information'>
                        <PauseGameButton
                            isGamePaused={isGamePaused}
                            setIsGamePaused={setIsGamePaused}
                            draggable={draggable}
                            setDraggable={setDraggable}
                        />
                    </div>
                    <div className='game-information'>
                        <ScoreBoard
                            score={gameScore}
                        />
                    </div>
                </div>
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