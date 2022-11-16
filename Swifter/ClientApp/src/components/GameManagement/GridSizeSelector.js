import React, { useEffect, useState } from 'react'

const GridSizeSelector = ({ redirectToGamePage, selectedGameModeId, height, width, setHeight, setWidth }) => {
    const [selectedGameMode, setSelectedGameMode] = useState({})

    useEffect(() => {
        const getSpecificGameMode = async (id) => {
            const response = await fetch(`GameModes/GetSpecificGameMode/${id}`)
            const data = await response.json()
            setSelectedGameMode(data)
        }
        getSpecificGameMode(selectedGameModeId)
    }, [selectedGameModeId])

    return (
        <div className='grid-size-container'>
            <form onSubmit={redirectToGamePage}>
                <div className='grid-size-header' >
                    Select the game grid size
                </div>

                <div className='input-field-container' >

                    <div className='input-container'>
                        <div className='input-label' >Height</div>
                        <input className='input-field' name="height" type="number" required={selectedGameMode.hasRules ? false : true}
                            onChange={(event) => setHeight(event.target.value)}
                            disabled={selectedGameMode.hasRules ? true : false}
                            value={height !== null ? height : ''}
                        />
                    </div>

                    <div className='input-container'>
                        <div className='input-label' >Width</div>
                        <input className='input-field' name="width" type="number" required={selectedGameMode.hasRules ? false : true}
                            onChange={(event) => setWidth(event.target.value)}
                            disabled={selectedGameMode.hasRules ? true : false}
                            value={width !== null ? width : ''}
                        />
                    </div>

                </div>

                <br />
                <input className='grid-size-button button' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default GridSizeSelector