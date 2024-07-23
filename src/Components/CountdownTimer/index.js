import { useEffect, useState } from "react"

const CountdownTimer=()=>{

    const [timer,setTimer] = useState(10)

    const [count,setCount] = useState()

    const [countTime,setCountTime] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
           
        },1000)

        return ()=>clearInterval(interval)
    },[])

    const handleReset=()=>{
        setTimer(10)
    }


    useEffect(()=>{
      const interval = setInterval(()=>{
        const date  = new Date().toLocaleTimeString()
        console.log(date)
        setCount(date)
        setCountTime((prev)=>prev+1)

      },1000)

      return () => clearInterval(interval);
    },[])


    const formattedDate=(time)=>{
      const getSeconds = `0${(time%60)}`.slice(-2)
      const minutes = Math.floor(time/60)
      const getMinutes = `0${(minutes%60)}`.slice(-2)
      const getHours = `0${Math.floor(time/3600)}`.slice(-2)

      return `${getHours}-${getMinutes}-${getSeconds}`
    }

    return (
      <div>
        <p>Countdown:{timer}</p>
        <p>{count}</p>
        <p>{formattedDate(countTime)}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
}

export default CountdownTimer