import { usePuzzleContext } from "../context/usePuzzleContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function CountdownTimer() {
  const { getRemainingTime } = usePuzzleContext()

  const remainingTime: number = getRemainingTime()
  const navigate = useNavigate()

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(()=>{
    if (remainingTime <= 0) {
      navigate("/failure", {replace: true})
    }
  }, [remainingTime, navigate])

  if (remainingTime === undefined){
    return null
  }

  return (
    <div>    
      <h1>Countdown: {formatTime(remainingTime)}</h1>
      {remainingTime === 0 && <p>Estamos sem tempo!</p>}
    </div>
  );
}

export default CountdownTimer;