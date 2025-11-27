import { useTimerContext } from "../context/TimerContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function CountdownTimer() {
  const { getRemainingTime, getIsPenalized } = useTimerContext()

  const remainingTime: number = getRemainingTime()
  const navigate = useNavigate()

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  useEffect(()=>{
    if (remainingTime <= 0) {
      navigate("/failure", {replace: true})
    }
  }, [remainingTime, navigate])

  if (remainingTime === undefined){
    return null
  }

  const timerClasses = `transition-colors duration-200 ${
    getIsPenalized()
      ? "text-red-500 animate-shake"
      : ""
  }`

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-2xl shadow-2xl p-7 m-4 border border-gray-300 ">
        <p className={timerClasses}>TEMPO RESTANTE:</p>
        <p>{formatTime(remainingTime)}</p>
      </div>
    </div>
  )
}

export default CountdownTimer;