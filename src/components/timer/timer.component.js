import React, { useState } from 'react';

export const Timer = ({ pending, reload}) => {
  const [time, setTime] = useState(6);

  const countDown = () => {
    setTime(time - 1);
  }

  time > 0
  ? setTimeout(countDown, 1000)
  : pending.length > 0 ? setTime(6) : reload();
  
  return (
    <>
      {pending.length > 0 && <Progress progress={time / 100} />}
    </>
  );
};