import React, { useEffect, useState } from 'react'
import GridSizeSelector from '../GameManagement/GridSizeSelector'
import GameModes from '../GameManagement/GameModes/GameModes'
import Header from '../HomePage/Header'
import { useNavigate } from "react-router-dom";

const Home = () =>
{
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [selectedGameModeId, setSelectedGameModeId] = useState(null)

    let navigate = useNavigate();

    // effect for getting the id of the free-roam game mode
    useEffect(() => {
        const getIdOfFreeRoamGameMode = async (type) => {
            const response = await fetch(`api/GameModes/Type/${type}`)
            const data = await response.json()
            setSelectedGameModeId(data)
        }
        getIdOfFreeRoamGameMode('free-roam')
    }, [])
    
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

    return (
        <div>

            <Header/>

            <GridSizeSelector
                redirectToGamePage={redirectToGamePage}
                selectedGameModeId={selectedGameModeId}
                height={height}
                width={width}
                setHeight={setHeight}
                setWidth={setWidth}
            />

            <GameModes
                selectedGameModeId={selectedGameModeId}
                setSelectedGameModeId={setSelectedGameModeId}
                setHeight={setHeight}
                setWidth={setWidth}
            />       

        </div>
    );
}

export default Home;