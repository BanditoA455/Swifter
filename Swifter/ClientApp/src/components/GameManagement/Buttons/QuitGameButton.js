import React from 'react'
import { useNavigate } from "react-router-dom";

const QuitGameButton = ({ gameBoardDimensions }) => {

    let navigate = useNavigate();

    const redirectToHomePage = () => {
        navigate('/');
    }

    return (
        <div className='quit-game-button-container' style={gameBoardDimensions}>
            <button
                className='quit-game-button button'
                onClick={redirectToHomePage}
            >
                Quit game
            </button>
        </div>
    )
}

export default QuitGameButton