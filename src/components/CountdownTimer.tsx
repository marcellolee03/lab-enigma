import { usePuzzleContext } from "../context/usePuzzleContext";


export function CountdownTimer() {
  const { getRemainingTime } = usePuzzleContext()

  const remainingTime:number|undefined = getRemainingTime()

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (remainingTime === undefined){
    return null
  } else{
    return (
      <div>    
        <h1>Countdown: {formatTime(remainingTime)}</h1>
        {remainingTime === 0 && <p>Estamos sem tempo!</p>}
      </div>
    );
  }
}

export default CountdownTimer;