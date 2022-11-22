import React, { useEffect, useState } from 'react'
import GridSizeSelector from '../GameManagement/GridSizeSelector'
import { useNavigate } from "react-router-dom";

const Home = () =>
{
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [selectedGameModeId, setSelectedGameModeId] = useState(1)

    const [gameModes, setGameModes] = useState([])

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

    useEffect(() => {
        getAllGameModes()
        async function getAllGameModes() {
            const response = await fetch('api/GameModes/GetAll')
            const data = await response.json()
            setGameModes(data)
        }
    }, [])

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

            {gameModes.map((gameMode) => {
                return (
                    <div>
                        { gameMode.displayName }
                    </div>
                )
            })}

        </div>
    );
}

export default Home;