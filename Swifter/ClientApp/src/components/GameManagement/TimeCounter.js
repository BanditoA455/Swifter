import React, { useEffect } from 'react'

const TimeCounter = ({ timeElapsed, setTimeElapsed, isGamePaused }) => {

    //effect for counting the time elapsed
    useEffect(() => {
        let time = timeElapsed
        const timer = setInterval(() => {
            if (!isGamePaused) {
                setTimeElapsed(time)
                time++
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [isGamePaused])

    return (
        <div>
            Time elapsed: <b>{timeElapsed}</b>
        </div>
    )
}

export default TimeCounter