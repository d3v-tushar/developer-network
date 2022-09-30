//import { useState } from "react";

const totalDuration = (time) =>{
 const displayedTime = document.getElementById('activity-time');
 const stringTime = displayedTime.innerText;
 const activityDuration = parseInt(stringTime);
 const totalDuration = activityDuration + time;
 displayedTime.innerText = totalDuration;
}

const BreakTimeLS = (value) =>{
    const breakDuration = document.getElementById('break-time');
    breakDuration.innerText = value;
    localStorage.setItem('break-time', value);
}

// const BreakTimeLS = (value) =>{
//     const [duration, setDuration] = useState(0);
//     setDuration(duration + value);
//      const breakDuration = document.getElementById('break-time');
//      breakDuration.innerText = duration;
//      localStorage.setItem('break-time', value);
// }

const DisplayBreakTimeFromLS = () =>{
    let savedDuration = localStorage.getItem('break-time');
    //console.log(savedDuration);
    if(savedDuration){
        const displayTime = document.getElementById('break-time');
        displayTime.innerText = savedDuration;
    }
}

export {
    totalDuration,
    BreakTimeLS,
    DisplayBreakTimeFromLS
}

