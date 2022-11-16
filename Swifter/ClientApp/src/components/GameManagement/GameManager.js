import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard'

const candyColors =
    [
        'blue',
        'green',
        'orange',
        'purple',
        'red',
        'yellow'
    ]

const GameManager = ({ height, width, selectedGameMode, moveCount, setMoveCount, timeElapsed, draggable, setDraggable, isGamePaused, setIsGamePaused, setHasGameEnded, setGameScore, hasGameEnded }) => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    const [squareBeingDragged, setSquareBeingDragged] = useState(null)
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)

    const checkForSameColorColumns = (itemCount) => {
        for (let y = 0; y < height - itemCount + 1; y++) {
            for (let x = 0; x < width; x++) {
                const decidedColor = currentColorArrangement[y][x]
                const isBlank = currentColorArrangement[y][x] === ''
                const coordinatesToBeChecked = []
                for (let k = 0; k < itemCount; k++) {
                    coordinatesToBeChecked.push({ y: y + k, x: x })
                }

                let areTheSameColor = true
                for (let k = 0; k < coordinatesToBeChecked.length; k++) {
                    if (currentColorArrangement[coordinatesToBeChecked[k].y][coordinatesToBeChecked[k].x] !== decidedColor) {
                        areTheSameColor = false
                        break
                    }
                }

                if (areTheSameColor && !isBlank) {
                    setGameScore((score) => score + itemCount)
                    coordinatesToBeChecked.forEach(coord => currentColorArrangement[coord.y][coord.x] = '')
                    return true
                }
            }
        }
    }

    const checkForSameColorRows = (itemCount) => {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width - itemCount + 1; j++) {
                const decidedColor = currentColorArrangement[i][j]
                const isBlank = currentColorArrangement[i][j] === ''
                const coordinatesToBeChecked = []
                for (let k = 0; k < itemCount; k++) {
                    coordinatesToBeChecked.push({ y: i, x: j + k })
                }

                let areTheSameColor = true
                for (let k = 0; k < coordinatesToBeChecked.length; k++) {
                    if (currentColorArrangement[coordinatesToBeChecked[k].y][coordinatesToBeChecked[k].x] !== decidedColor) {
                        areTheSameColor = false
                        break
                    }
                }

                if (areTheSameColor && !isBlank) {
                    setGameScore((score) => score + itemCount)
                    coordinatesToBeChecked.forEach(coord => currentColorArrangement[coord.y][coord.x] = '')
                    return true
                }
            }
        }
    }

    const moveIntoSquareBellow = () => {
        for (let i = 0; i < height - 1; i++) {
            for (let j = 0; j < width; j++) {
                if (i === 0 && currentColorArrangement[i][j] === '') {
                    currentColorArrangement[i][j] = candyColors[Math.floor(Math.random() * candyColors.length)]
                }
                if ((currentColorArrangement[i + 1][j]) === '') {
                    currentColorArrangement[i + 1][j] = currentColorArrangement[i][j]
                    currentColorArrangement[i][j] = ''
                }
            }
        }
    }

    const createBoard = () => {
        const newGameBoard = []
        for (let i = 0; i < height; i++) {
            const newGameBoardRow = []
            for (let j = 0; j < width; j++) {
                newGameBoardRow.push(candyColors[Math.floor(Math.random() * candyColors.length)])
            }
            newGameBoard.push(newGameBoardRow)
        }
        setCurrentColorArrangement(newGameBoard)
    }

    const dragStart = (square) => {
        setSquareBeingDragged(square.target)
    }

    const dragDrop = (square) => {
        setSquareBeingReplaced(square.target)
    }

    const dragEnd = () => {
        let coordOfSquareBeingReplacedId
        let coordOfSquareBeingDraggedId
        if (squareBeingReplaced !== null) {
            let coord = {
                y: parseInt(squareBeingReplaced.getAttribute('y')),
                x: parseInt(squareBeingReplaced.getAttribute('x'))
            }
            coordOfSquareBeingReplacedId = { y: coord.y, x: coord.x }
        }
        if (squareBeingDragged !== null) {
            let coord = {
                y: parseInt(squareBeingDragged.getAttribute('y')),
                x: parseInt(squareBeingDragged.getAttribute('x'))
            }
            coordOfSquareBeingDraggedId = { y: coord.y, x: coord.x }
        }

        const validMoves = [
            { y: coordOfSquareBeingDraggedId.y - 1, x: coordOfSquareBeingDraggedId.x },
            { y: coordOfSquareBeingDraggedId.y, x: coordOfSquareBeingDraggedId.x + 1 },
            { y: coordOfSquareBeingDraggedId.y + 1, x: coordOfSquareBeingDraggedId.x },
            { y: coordOfSquareBeingDraggedId.y, x: coordOfSquareBeingDraggedId.x - 1 }
        ]

        let validMove = false
        for (let i = 0; i < validMoves.length; i++) {
            if (coordOfSquareBeingReplacedId.y === validMoves[i].y && coordOfSquareBeingReplacedId.x === validMoves[i].x) {
                validMove = true
                break
            }
        }

        if (validMove) {
            currentColorArrangement[coordOfSquareBeingReplacedId.y][coordOfSquareBeingReplacedId.x] = squareBeingDragged.style.backgroundColor
            currentColorArrangement[coordOfSquareBeingDraggedId.y][coordOfSquareBeingDraggedId.x] = squareBeingReplaced.style.backgroundColor
            const isColumnOfFive = checkForSameColorColumns(5)
            const isRowOfFive = checkForSameColorRows(5)
            const isColumnOfFour = checkForSameColorColumns(4)
            const isRowOfFour = checkForSameColorRows(4)
            const isColumnOfThree = checkForSameColorColumns(3)
            const isRowOfThree = checkForSameColorRows(3)
            if (coordOfSquareBeingReplacedId && (isColumnOfFive || isRowOfFive || isColumnOfFour || isRowOfFour || isColumnOfThree || isRowOfThree)) {
                setSquareBeingDragged(null)
                setSquareBeingReplaced(null)
                setMoveCount(moveCount + 1)
            }
            else {
                currentColorArrangement[coordOfSquareBeingReplacedId.y][coordOfSquareBeingReplacedId.x] = squareBeingReplaced.style.backgroundColor
                currentColorArrangement[coordOfSquareBeingDraggedId.y][coordOfSquareBeingDraggedId.x] = squareBeingDragged.style.backgroundColor
                setCurrentColorArrangement([...currentColorArrangement])
            }
        }
    }

    //effect for creating the board
    useEffect(() => {
        createBoard()
    }, [height, width])

    //effect for checking for color matches and controlling game fucntionality
    useEffect(() => {
        const timer = setInterval(() => {
            checkForSameColorColumns(5)
            checkForSameColorRows(5)
            checkForSameColorColumns(4)
            checkForSameColorRows(4)
            checkForSameColorColumns(3)
            checkForSameColorRows(3)
            moveIntoSquareBellow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 250)
        return () => clearInterval(timer)
    }, [currentColorArrangement])

    //effect for checking when the game should finish
    useEffect(() => {
        if (selectedGameMode.hasRules) {
            if (selectedGameMode.type == 'standard' && moveCount == selectedGameMode.duration) {
                setDraggable(false)
                setHasGameEnded(true)
                setIsGamePaused(true)
            }
            if (selectedGameMode.type == 'time-trial' && timeElapsed == selectedGameMode.duration) {
                setDraggable(false)
                setHasGameEnded(true)
                setIsGamePaused(true)
            }
        }
    }, [timeElapsed, moveCount])

    return (
        <div className="game-manager" >
            {<GameBoard
                currentColorArrangement={currentColorArrangement}
                dragStart={dragStart}
                dragDrop={dragDrop}
                dragEnd={dragEnd}
                height={height}
                width={width}
                draggable={draggable}
                transparency={isGamePaused || hasGameEnded ? 'transparency' : ''}
            />
            }
        </div>
    );
}

export default GameManager;