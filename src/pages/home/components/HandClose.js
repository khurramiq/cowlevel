import clh from '../../../assets/images/clh.png';
import oph from '../../../assets/images/oph.png';
import handshakeopn from '../../../assets/images/handshakeopn.png';
import handshakeClose from '../../../assets/images/handshakeClose.png';
import closedElevator from '../../../assets/images/closedElevator.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import CowMoving from './CowMoving';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const HandClose = ({ fullpageApi, open, setOpen, state }) => {
  return (
    <div className="section relative overflow-x-hidden scrollbar-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
          <img
            className="md:w-[60px] xs:w-[50px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
          <div className="relative">
            {open ? (
              <i
                className="far fa-times text-4xl cursor-pointer rotate_animation"
                onClick={() => setOpen(false)}
              ></i>
            ) : (
              <FaBars
                className="md:text-3xl xs:text-lg cursor-pointer rotate-animationR"
                onClick={() => setOpen(true)}
              />
            )}
            {open && <MobileLinks />}
          </div>
        </div>
      </div>
      <div className="top-0 absolute xs:flex xs:items-center h-full w-screen overflow-hidden bg-[#CAD5CC]">
        <div className="relative top-0 w-full h-full xs:text-left md:text-center">
          <img
            className="absolute top-0 w-full xs:inline-block sm:hidden"
            src={closedElevator}
            alt="closedElevator"
          />
          <img
            className={`absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]
            ${
              state?.destination?.index === 7 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[2]'
            }
            `}
            src={handshakeClose}
            alt="handshakeClose"
          />
          {state?.destination?.index === 7 && state?.direction === 'down' && (
            <img
              className={`absolute w-full top-[-50px] xs:inline-block sm:hidden z-[1]
            ${
              state?.destination?.index === 7 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[1]'
            }
            `}
              src={handshakeopn}
              alt="handshakeClose"
            />
          )}
          <div className="relative w-full h-full flex justify-center">
            <img
              className={`absolute top-0  sm:w-full md:w-auto sm:h-full md:h-full sm:inline-block xs:hidden ${
                state?.destination?.index === 7 && state?.direction === 'down'
                  ? 'fadein'
                  : 'z-[1]'
              }`}
              src={clh}
              alt="elevatorscene"
            />
            <img
              className={`absolute top-0 sm:w-full md:w-auto sm:h-full md:h-full sm:inline-block xs:hidden ${
                state?.destination?.index === 7 && state?.direction === 'down'
                  ? 'fadeout'
                  : 'z-[0]'
              }`}
              src={oph}
              alt="oph"
            />
          </div>
        </div>
      </div>
      <CowMoving fullpageApi={fullpageApi} state={state} />
    </div>
  );
};

export default HandClose;
