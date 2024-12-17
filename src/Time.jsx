import React, { useState, useEffect } from 'react';

const Time = () => {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            // Alert or switch to break time
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeRemaining]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => setTimeRemaining(25 * 60);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <h1 className="mb-4">{`${minutes}:${seconds.toString().padStart(2, '0')}`}</h1>
      <div className="grid grid-cols-3">
            <div>
              <button onClick={startTimer} className="bg-green-900 p-2">Focus</button>
            </div>
            <div>
              <button onClick={stopTimer} className="bg-blue-900 p-2">Break</button>
            </div>
            <div>
              <button onClick={resetTimer} className="bg-red-900 p-2">Restart</button>
            </div>
          </div>
    </div>
  );
};

export default Time;