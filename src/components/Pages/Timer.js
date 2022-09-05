import React from 'react'
import { useState } from 'react'

function Timer() {
    let time = new Date().toLocaleDateString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000)
    let date = new Date().toLocaleDateString();
    const [currentDate, setCurrentDate] = useState(date);

    const updateDate = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
  return (
    <div>
        <h1>
            {currentDate}
        </h1>
        <h2>
            {currentTime}
        </h2>

    </div>
  )
}

export default Timer