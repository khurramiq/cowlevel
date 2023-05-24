/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Flip from '../../../components/Flip';
import { FaAngleUp } from 'react-icons/fa';

const Counter = ({ startCounter, fullpageApi }) => {
  const [count1, setCount1] = useState(110);
  const [count2, setCount2] = useState(4);
  const [count3, setCount3] = useState(9);
  const [count4, setCount4] = useState(4);
  const [count5, setCount5] = useState(4);
  const [count6, setCount6] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
    }, 100); // Delay between each number in milliseconds

    if (count1 === 205) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count1]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2((prevCount) => prevCount - 1);
    }, 1000); // Delay between each number in milliseconds

    if (count2 === 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count2]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount3((prevCount) => prevCount - 1);
    }, 1000); // Delay between each number in milliseconds

    if (count3 === 5) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count3]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount4((prevCount) => prevCount - 1);
    }, 1000); // Delay between each number in milliseconds

    if (count4 === 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count4]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount5((prevCount) => prevCount - 1);
    }, 1000); // Delay between each number in milliseconds

    if (count5 === 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count5]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount6((prevCount) => prevCount - 1);
    }, 1000); // Delay between each number in milliseconds

    if (count6 === 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count6]);
  useEffect(() => {
    if (startCounter) {
      setCount1(150);
      // setCount2(4);
      // setCount3(9);
      setCount4(0);
      setCount5(0);
      setCount6(0);
    }
  }, [startCounter]);

  return (
    <div
      className="absolute flex justify-center items-center w-screen overflow-hidden bg-[#FFFBE8]"
      style={{ height: 'calc(100vh - 100px)', top: 'calc(100vh - 100px)' }}
    >
      <div>
        <div className="flex items-center justify-center">
          <span className="xs:text-[32px] sm:text-[3em] mr-2">$</span>
          <Flip value={count1} />
          {/* <Flip value={count2} />
          <Flip value={count3} /> */}
          <Flip value={count4} />
          <Flip value={count5} />
          <Flip value={count6} />
        </div>
        <p className="xs:w-[90%] sm:w-full m-auto text-[36px] mt-[50px] font-bold text-center leading-[1.16]">
          OVER $200K OF IN-GAME ITEMS <br />
          CHANGE HANDS EVERY MINUTE.
        </p>
        <p className="text-center mt-[30px] font-semibold text-[24px]">
          HOLY COW!
        </p>
        <p className="xs:w-[90%] sm:w-full m-auto text-center mt-[30px] font-normal text-[18px] leading-[1.3]">
          But the market lacks transparency, is ripe with fraud, and has
          operated <br />
          without any regulation or compliance framework. Until now.
        </p>
      </div>
      <button
        className="scrollToTopButton"
        onClick={() => {
          fullpageApi.moveTo(1);
        }}
      >
        <FaAngleUp size="large" />
      </button>
    </div>
  );
};

export default Counter;
