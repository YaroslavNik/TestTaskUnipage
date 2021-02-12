import React, { useEffect, useRef, useState } from 'react'
import s from './Statistis.module.sass'

const Statistics = ({data, textLength, stopwatchIsRunnig}) => {
    const [stopwatch, setStopwatch] = useState(0)
    const stopwatchRef = useRef(null)

    useEffect(() => {
        if(stopwatchIsRunnig) {
            stopwatchStart()
        } else stopwatchStop()
    }, [stopwatchIsRunnig])

    const stopwatchStart = () => {
        stopwatchRef.current = setInterval(() => setStopwatch(prev => prev + 1), 1000)
    }  
    const stopwatchStop = () => clearInterval(stopwatchRef.current)

    return (
        <div className = {s.statistics}>
            <p>Скорость печати: {stopwatchIsRunnig !== undefined && stopwatch > 0 ? (data.currentLetter / stopwatch * 60).toFixed(0) : 0} символов в мин.</p>
            <p>Точность: {(100 - data.allMistakes / textLength * 100).toFixed(2)}%</p>
        </div>
    )
}

export default Statistics
