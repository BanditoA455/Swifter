import React from 'react'

const Header = ({ height, width, gameModeName }) => {

    return (
        <div className='game-header'>
            You have chosen to play <b>{gameModeName}</b>. The game grid size will be <b>{height} x {width}</b>.
        </div>
    )
}

export default Header