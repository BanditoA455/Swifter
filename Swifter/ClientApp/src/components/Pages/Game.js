import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../GamePage/Header'
import GameManager from '../GameManagement/GameManager'
import TimeCounter from '../GameManagement/TimeCounter'
import MoveCounter from '../GameManagement/MoveCounter'
import ScoreBoard from '../GameManagement/ScoreBoard'
import FinalResult from '../GameManagement/FinalResult'
import StartGameButton from '../GameManagement/Buttons/StartGameButton'
import PauseGameButton from '../GameManagement/Buttons/PauseGameButton'
import QuitGameButton from '../GameManagement/Buttons/QuitGameButton'
import PlayAgainButton from '../GameManagement/Buttons/PlayAgainButton'

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

    const gameBoardDimensions = {
        height: 70 * height,
        width: 70 * width
    }

    // effect for getting the specified game mode
    useEffect(() => {
        const getSpecificGameMode = async (id) => {
            const response = await fetch(`api/GameModes/${id}`)
            const data = await response.json()
            setSelectedGameMode(data)
        }
        getSpecificGameMode(selectedGameModeId)
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
                </div>}

            <div className='game-display-container'>
                <div className='game-display-item'>
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
                <div className='game-display-item'>
                    {hasGameStarted && isGamePaused && !hasGameEnded &&
                        <QuitGameButton
                            gameBoardDimensions={gameBoardDimensions}
                        />
                    }
                </div>
                <div className='game-display-item'>
                    {hasGameEnded &&
                        <div className='final-result-and-play-button-container' style={gameBoardDimensions}>
                            <FinalResult
                                score={gameScore}
                                timeElapsed={timeElapsed}
                                moveCount={moveCount}
                            />
                            <PlayAgainButton
                                height={height}
                                width={width}
                                selectedGameModeId={selectedGameModeId}
                                setGameScore={setGameScore}
                                setTimeElapsed={setTimeElapsed}
                                setMoveCount={setMoveCount}
                                setDraggable={setDraggable}
                                setIsGamePaused={setIsGamePaused}
                                setHasGameStarted={setHasGameStarted}
                                setHasGameEnded={setHasGameEnded}
                            />
                        </div>
                    }

                </div>
            </div>
            <div style={gameBoardDimensions} className='margin-top'></div>
        </div>
    );
}

export default Game;