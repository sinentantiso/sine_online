import React, (useState, useEffect) from "react";

const Clock = () => {

    const [days, setDays] = useState ();
    const [hours, setHours] = useState ();
    const [minutes, setMinutes] = useState ();
    const [seconds, setSeconds] = useState ();

    let interval;
    const countDown = () =>{
        const destination = new Date ("Nov 14, 2022").getTime()

        interval = setInterval (()=>{
            const now= new Date ().getTime()getTime ()
        })
    }

    return (
    <div className="clock_wrapper d-flex align-item-center gap-3">
       <div className="clock__data d-flex align-item-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">10</h1>
                <h5 className="text-white fs-6">days</h5>
            </div>
            <span className="text-white fs-3">:</span>
       </div>  
       <div className="clock__data d-flex align-item-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">10</h1>
                <h5 className="text-white fs-6">Hours</h5>
            </div>
            <span className="text-white fs-3">:</span>
       </div>  
       <div className="clock__data d-flex align-item-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">10</h1>
                <h5 className="text-white fs-6">Minutes</h5>
            </div>
            <span className="text-white fs-3">:</span>
       </div>  
       <div className="clock__data d-flex align-item-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">10</h1>
                <h5 className="text-white fs-6">Seconds</h5>
            </div>
       </div>    
    </div>
    )
}

export default Clock;
