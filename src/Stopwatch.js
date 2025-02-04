import React, { useState } from "react";

const defaultData = { data: 0, isPaused: true };
const StopWatch = () => {
  const [timer, setTimer] = useState(null);
  const [state, setState] = useState({ ...defaultData });

  const handleReset = () => {
    clearInterval(timer);
    setTimer(null);
    setState({ ...defaultData });
  };

  const handlePauseResume = () => {
    if (state.isPaused) {
      const tmp = setInterval(() => {
        setState((s) => ({ ...s, data: s.data + 1, isPaused: false }));
      }, 1000);
      setTimer(tmp);
    } else {
      clearInterval(timer);
      setTimer(null);
      setState((s) => ({ ...s, isPaused: true }));
    }
  };

  return (
    <>
      <h3>{state.data}</h3>
      <button onClick={handlePauseResume}>
        {state.isPaused ? "Start" : "Pause"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default StopWatch;
