import React, { useEffect, useState } from 'react'
import s from './PageExercise.module.sass'
import { appAPI } from '../../API/API';
import Statistics from '../../Components/Statistics/Statistics';

const getWrittenText = (index, text, mistake) => {
    let strWritten = text.substr(0, index)
    let strCurrent = text.substr(index, 1)
    let strRemaining = text.substr(index + 1)

    return index === text.length
                ?   <p> <span className = {s.writtenText}>{strWritten}</span> </p>
                :   <p>
                        <span className = {s.writtenText}>{strWritten}</span>
                        <span className = {`${s.currentText} ${mistake ? s.active : ''} `}>{strCurrent}</span>
                        <span className = {s.remainingText}>{strRemaining}</span>
                    </p>
}


const PageExercise = ({fullText}) => {

    const [stopwatchIsRunnig, setStopwatchIsRunnig] = useState(undefined)
    const [currentData, setCurrentData] = useState({
        currentLetter: 0,
        currentMistake: false,
        allMistakes: 0,
    })

    useEffect(() => {
        const handleKey = (event) => {
            if(/[а-яА-Я0-9\s,.!?;:()-]/.test(event.key)) {
                event.key === fullText[currentData.currentLetter]
                    ?   setCurrentData(prev => ({...prev, currentLetter: prev.currentLetter + 1, currentMistake: false}))
                    :   setCurrentData(prev => ({...prev,  allMistakes: prev.allMistakes + 1, currentMistake: true}))
                
                if(currentData.currentLetter === 0) setStopwatchIsRunnig(true)
                if(currentData.currentLetter === fullText.length - 1) setStopwatchIsRunnig(false)
            }
                
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [currentData.currentLetter, fullText])

    return (
        <div className = {s.pageExercise}>
            {getWrittenText(currentData.currentLetter, fullText, currentData.currentMistake)}
            
            <Statistics 
                data = {currentData} 
                textLength = {fullText.length}
                stopwatchIsRunnig = {stopwatchIsRunnig}
            />
        </div>
    )
}

export default PageExercise
