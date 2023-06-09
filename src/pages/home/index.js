import ReactFullpage from '@fullpage/react-fullpage';
import HandOpen from './components/HandOpen';
import HandClose from './components/HandClose';
import ElevatorScene from './components/ElevatorScene';
import Stefanavatar from './components/Stefanavatar';
import SignupForm from './components/SignupForm';
import CowLevelSlide1 from './components/CowLevelSlide1';
import StefanBoris1 from './components/StefanBoris1';
import StefanBoris2 from './components/StefanBoris2';
import CowLevelHeader from '../../components/CowLevelHeader';
import cowskinpattern from '../../assets/images/cowskinpattern.png';
import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import CowLevelSlide0 from './components/CowLevelSlide0';
import './styles.css';
import CowSkin from './components/CowSkin';
import SignupFormInner from './components/SignupFormInner';
import mcows from '../../assets/images/mcows.png';

const Home = () => {
  const [startCounter, setStartCounter] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReactFullpage
        // navigation
        scrollingSpeed="1"
        animateAnchor={true}
        keyboardScrolling={true}
        dropEffect={true}
        easing="easeInOutCubic"
        afterLoad={(origin, destination, direction) => {
          // console.log('afterLoad event', { origin, destination, direction });
          console.log('afterLoad', destination.index);
        }}
        onLeave={(origin, destination, direction) => {
          // console.log('onLeave event', { origin, destination, direction });
          console.log('onLeave event', destination.index);
          if (destination.index === 2 || destination.index === 4) {
            setStartCounter(true);
          } else {
            setStartCounter(false);
          }
        }}
        afterRender={() => {}}
        render={({ state, fullpageApi }) => {
          console.log('state', state);
          return (
            <div className="relative">
              <CowLevelSlide0
                open={open}
                setOpen={setOpen}
                fullpageApi={fullpageApi}
              />
              <CowLevelSlide1
                open={open}
                setOpen={setOpen}
                fullpageApi={fullpageApi}
              />
              <StefanBoris1
                open={open}
                setOpen={setOpen}
                state={state}
                fullpageApi={fullpageApi}
              />
              <StefanBoris2
                fullpageApi={fullpageApi}
                startCounter={startCounter}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <ElevatorScene
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <Stefanavatar
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <HandOpen
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <HandClose
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <CowSkin
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <div className="section relative overflow-hidden scrollbar-hidden">
                <CowLevelHeader
                  open={open}
                  setOpen={setOpen}
                  fullpageApi={fullpageApi}
                />
                <div
                  className={`absolute top-0 w-screen h-full overflow-hidden bg-[#F4423F] scrollbar-hidden
                  ${
                    state?.destination?.index === 9 &&
                    state?.direction === 'down'
                      ? 'fadein'
                      : 'z-[1]'
                  }
                  ${
                    state?.destination?.index === 9 && state?.direction === 'up'
                      ? 'fadein'
                      : 'z-[1]'
                  }
                  `}
                >
                  <button
                    className="scrollToTopButton"
                    onClick={() => {
                      fullpageApi.moveTo(1);
                    }}
                  >
                    <FaAngleUp size="large" />
                  </button>
                </div>
                {state?.destination?.index === 9 &&
                  state?.direction === 'down' && (
                    <img
                      className={`absolute top-0 h-full w-full xs:block sm:hidden
                    ${
                      state?.destination?.index === 9 &&
                      state?.direction === 'down'
                        ? 'fadeout'
                        : 'z-[0]'
                    }
                    `}
                      src={mcows}
                      alt="cowskinpattern"
                    />
                  )}
                <SignupFormInner
                  state={state}
                  fade={'fadeout'}
                  zIndex={'z-[0]'}
                  destination={9}
                  direction={'up'}
                />
                {state?.destination?.index === 9 &&
                  state?.direction === 'down' && (
                    <img
                      className={`absolute top-0 h-full w-full sm:block xs:hidden
                  ${
                    state?.destination?.index === 9 &&
                    state?.direction === 'down'
                      ? 'fadeout'
                      : 'z-[0]'
                  }
                  `}
                      src={cowskinpattern}
                      alt="cowskinpattern"
                    />
                  )}
              </div>
              <SignupForm
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
                state={state}
              />
              <button
                className="scrollToTopButton"
                onClick={() => {
                  fullpageApi.moveTo(1);
                }}
              >
                {/* <i className="fal fa-angle-up text-4x"></i> */}
                <FaAngleUp size="large" />
              </button>
            </div>
          );
        }}
      />
    </>
  );
};

export default Home;
