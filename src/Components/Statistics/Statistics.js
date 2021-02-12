import React, { useEffect, useRef, useState } from 'react'
import s from './Statistis.module.sass'

const Statistics = ({data, textLength, stopwatchIsRunnig, resetStopwatch, forceUpdate}) => {
    const [stopwatch, setStopwatch] = useState(0)
    const stopwatchRef = useRef(null)

    useEffect(() => {
        if(stopwatchIsRunnig) {
            stopwatchStart()
        } else stopwatchStop()
    }, [stopwatchIsRunnig])

    useEffect(() => {setStopwatch(0)}, [resetStopwatch, forceUpdate])

    const stopwatchStart = () => {
        stopwatchRef.current = setInterval(() => setStopwatch(prev => prev + 1), 1000)
    }  
    const stopwatchStop = () => clearInterval(stopwatchRef.current)

    const getAccurancy = () => (100 - data.allMistakes / textLength * 100).toFixed(2)

    return (
        <div className = {s.statistics}>
            <p>Скорость печати: <b>{stopwatchIsRunnig !== undefined && stopwatch > 0 ? (data.currentLetter / stopwatch * 60).toFixed(0) : 0}</b> зн./мин</p>
            <p>Точность: <b>{getAccurancy() > 0 ? getAccurancy() : 0}%</b></p>
        </div>
    )
}

export default Statistics
