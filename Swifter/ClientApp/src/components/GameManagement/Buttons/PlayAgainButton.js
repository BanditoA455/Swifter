import React from 'react'
import { useNavigate } from "react-router-dom";

const PlayAgainButton = ({ height, width, selectedGameModeId, setGameScore, setTimeElapsed, setMoveCount, setDraggable, setIsGamePaused, setHasGameStarted, setHasGameEnded }) => {

    let navigate = useNavigate();

    const redirectToGamePage = () => {
        navigate(
            `/game/${height}/${width}/${selectedGameModeId}`,
            {
                height: height,
                width: width,
                selectedGameModeId: selectedGameModeId
            }
        );
    }

    const onClickAction = () => {
        setGameScore(0)
        setTimeElapsed(0)
        setMoveCount(0)
        setDraggable(true)
        setIsGamePaused(true)
        setHasGameStarted(false)
        setHasGameEnded(false)
    }

    return (
        <div>
            <button
                className='button'
                onClick={onClickAction}
            >
                Play again
            </button>
        </div>
    )
}
export default PlayAgainButton