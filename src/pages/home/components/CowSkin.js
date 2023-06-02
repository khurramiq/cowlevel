import React from 'react';
import CowLevelHeader from '../../../components/CowLevelHeader';
import cowskinpattern from '../../../assets/images/cowskinpattern.png';
import mcows from '../../../assets/images/mcows.png';
import { FaAngleUp } from 'react-icons/fa';
import CowMovingInner from './CowMovingInner';

const CowSkin = ({ open, setOpen, fullpageApi, state }) => {
  return (
    <div className="section relative">
      <CowLevelHeader open={open} setOpen={setOpen} fullpageApi={fullpageApi} />
      <div className="absolute top-0 w-screen h-full overflow-hidden">
        <div className="relative w-full h-full flex justify-center">
          <img
            className={`absolute top-0 h-full w-full xs:block sm:hidden
          ${
            state?.destination?.index === 8 && state?.direction === 'down'
              ? 'fadein'
              : 'z-[1]'
          }
          ${
            state?.destination?.index === 8 && state?.direction === 'up'
              ? 'fadein'
              : 'z-[1]'
          }
          `}
            src={mcows}
            alt="cowskinpattern"
          />
          <CowMovingInner
            fullpageApi={fullpageApi}
            state={state}
            destination={8}
            direction={'down'}
            zIndex="z-[0]"
            fade="fadeout"
          />
          {state?.destination?.index === 7 && state?.direction === 'up' && (
            <div
              className={`absolute top-0 h-full w-full bg-white z-[1] 
            ${
              state?.destination?.index === 7 && state?.direction === 'up'
                ? 'block'
                : 'hidden'
            }            
            `}
            />
          )}
          {state?.destination?.index === 8 && state?.direction === 'up' && (
            <div
              className={`absolute top-0 h-full w-full bg-[#F4423F] z-[1] 
            ${
              state?.destination?.index === 8 && state?.direction === 'up'
                ? 'fadeout'
                : 'hidden'
            }            
            `}
            />
          )}
          <img
            className={`absolute top-0 h-full w-full sm:block xs:hidden ${
              state?.destination?.index === 8 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            ${
              state?.destination?.index === 8 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={cowskinpattern}
            alt="cowskinpattern"
          />
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
    </div>
  );
};

export default CowSkin;
