import React from 'react'

const GameItem = ({ propKey, backgroundColor, altText, y, x, dragStart, dragDrop, dragEnd, draggable, transparency }) => {
    return (
        <img
            className={`game-item opacity ${transparency}`}
            key={propKey}
            style={{ backgroundColor: backgroundColor }}
            alt={altText}
            y={y}
            x={x}
            draggable={draggable}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
        />
    )
}

export default GameItem