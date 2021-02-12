import React, { useRef } from 'react'
import s from './Navigation.module.sass'

const Navigation = ({setForceUpdate, setResetStopwatch}) => {
    const btnRefCancel = useRef(null)
    const btnRefReload = useRef(null)
    
    return (
        <div className = {s.navigation}>
            <button ref = {btnRefCancel} className = {s.button} onClick = {(e) => {setResetStopwatch(true); btnRefCancel.current.blur()}}>Сброс</button>
            <button ref = {btnRefReload} className = {s.button} onClick = {() => {setForceUpdate(prev => prev + 1); btnRefReload.current.blur()}}>Перезагрузка</button>
        </div>
    )
}

export default Navigation
