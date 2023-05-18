/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FlipNumbers from 'react-flip-numbers';

const Counter = ({ startCounter }) => {
  const [count, setCount] = useState(204999);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Delay between each number in milliseconds

    if (count === 205000) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  useEffect(() => {
    if (startCounter) {
      setCount(204995);
    }
  }, [startCounter]);

  return (
    <div className="absolute flex justify-center items-center top-[100%] w-screen h-screen overflow-hidden bg-[#FFFBE8]">
      <div>
        <div className="bzcounttt p-[10px]">
          $
          <FlipNumbers
            play
            color="#fff"
            background="#000"
            width={50}
            height={50}
            numbers={`${count}`}
            style={{
              borderRadius: '10px',
            }}
          />
        </div>
        <p className="text-[36px] mt-[50px] font-bold text-center leading-[1.16]">
          OVER $200K OF IN-GAME ITEMS <br />
          CHANGE HANDS EVERY MINUTE.
        </p>
        <p className="text-center mt-[30px] font-semibold text-[24px]">
          HOLY COW!
        </p>
        <p className="text-center mt-[30px] font-normal text-[18px] leading-[1.3]">
          But the market lacks transparency, is ripe with fraud, and has
          operated <br />
          without any regulation or compliance framework. Until now.
        </p>
      </div>
    </div>
  );
};

export default Counter;
