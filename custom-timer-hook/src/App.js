import useTimer from "./hooks/useTimer";

export default function App() {
  const TOTAL_TIME = 5; // 5 minutes
  const { isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);

  return (
    <div>
      <p>{seconds}</p>
      {isRunning ? <p>The timer is running.</p> : <p>No Timer Running</p>}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
