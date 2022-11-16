import React from 'react'
import GameBoardItem from './GameBoardItem'

const GameBoard = ({ currentColorArrangement, dragStart, dragDrop, dragEnd, height, width, draggable, transparency }) => {
    const gameBoardDimensions = {
        height: 70 * height,
        width: 70 * width
    }
    return (
        <div className="game-board" style={gameBoardDimensions}>
            {currentColorArrangement.map((items, index) => {
                return (
                    <>
                        {items.map((subItems, sIndex) => {
                            return (
                                <GameBoardItem
                                    propKey={parseInt(`${index}${sIndex}`)}
                                    backgroundColor={subItems}
                                    altText={`${index}${sIndex}`}
                                    y={parseInt(`${index}`)}
                                    x={parseInt(`${sIndex}`)}
                                    draggable={draggable}
                                    dragStart={dragStart}
                                    dragDrop={dragDrop}
                                    dragEnd={dragEnd}
                                    transparency={transparency}
                                />
                            )
                        })}
                    </>
                )
            })}
        </div>
    )
}

export default GameBoard