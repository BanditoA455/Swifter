import React, { useEffect, useState } from 'react'
import GridSizeSelector from '../GameManagement/GridSizeSelector'
import GameModes from '../GameManagement/GameModes/GameModes'
import { useNavigate } from "react-router-dom";

const Home = () =>
{
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [selectedGameModeId, setSelectedGameModeId] = useState(1)

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

    return (
        <div>

            <h1>Home page</h1>
            <p>This is the home page.</p>

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