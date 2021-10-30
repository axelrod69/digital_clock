import { useState, useEffect } from "react";
import "./box.css";

const Box = () => {
    const [date, setDate] = useState('');

    const Time = () => {
        let date = new Date();
        let hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        let ss = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        let time = `${hh}:${mm}:${ss}`;
        setDate(time);
    }

    useEffect(() => {
        setInterval(Time, 1000)
    });
   
    return (
        <div className="box">
            <div className="container">
                <div className="caption">Digital Clock</div>
                <div className="contentBox">
                    {date.toString()}
                </div>
            </div>
        </div>
    );
}

export default Box;