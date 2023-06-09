import ReactFullpage from '@fullpage/react-fullpage';
import { useEffect, useState } from 'react';
import popup_cow1 from '../../assets/images/cow_story/popup_cow1.gif';
import final_cow_Artboard from '../../assets/images/cow_story/final_cow_Artboard.png';
import cusror from '../../assets/images/cow_story/cusror.png';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import './styles.css';

const CowStory = () => {
  const [open, setOpen] = useState(false);
  const [shootCow, setShootCow] = useState(true);
  const [cowText, setCowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Code to be executed after 6 seconds
      setShootCow(false);
    }, 5000);

    // Clean up the timer when the component unmounts or changes
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {shootCow || cowText ? (
        <div className="relative flex justify-center items-center w-full h-full bg-black">
          {shootCow && (
            <img
              className="picture"
              onClick={() => {
                setShootCow(false);
                setCowText(true);
              }}
              style={{
                display: 'block',
                cursor: `url(${cusror}) 0 0, auto`,
              }}
              src={popup_cow1}
              alt="popup_cow1"
            />
          )}
          {cowText && (
            <div className="relative xs:w-[90%] xs:h-full xs:pt-[50px] sm:pt-0 sm:w-[80%] sm:h-[80%] md:w-[50%] md:h-[55%] m-auto text-white xs:overflow-hidden sm:overflow-visible">
              <div className="absolute w-[30px] h-[30px] rounded-full xs:top-[20px] xs:right-0 sm:top-[-15px] sm:right-[-15px]">
                <i
                  class="far fa-times-circle text-[30px] cursor-pointer"
                  onClick={() => setCowText(false)}
                ></i>
              </div>
              <div className="xs:block sm:flex items-center justify-center h-full">
                <div className="xs:w-[100%] sm:w-[40%] text-center">
                  <h3>The Cow Level</h3>
                  <p>
                    It began as a rumor about a hidden area full of cows in
                    Blizzard’s original Diablo video game. But it has
                    transcended its franchise to become one of the best-known
                    inside jokes in gaming. This mythical, once unattainable,
                    level became Boris and Stefan’s inspiration for naming their
                    fintech-for-gaming company.
                  </p>
                </div>
                <div className="xs:w-[100%] sm:w-[40%] h-full text-center">
                  <img
                    className="h-full cow_standing inline"
                    src={final_cow_Artboard}
                    alt="final_cow_Artboard"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <ReactFullpage
            // navigation
            scrollingSpeed="1"
            animateAnchor={true}
            keyboardScrolling={true}
            dropEffect={true}
            easing="easeInOutCubic"
            onLeave={(origin, destination, direction) => {
              // console.log('onLeave event', { origin, destination, direction });
              // if (destination.index === 2 || destination.index === 4) {
              //   setStartCounter(true);
              // } else {
              //   setStartCounter(false);
              // }
            }}
            render={({ state, fullpageApi }) => {
              return (
                <div className="relative">
                  <Slide1 open={open} setOpen={setOpen} />
                  <Slide2 open={open} setOpen={setOpen} state={state} />
                  <Slide3 open={open} setOpen={setOpen} state={state} />
                  <Slide4 open={open} setOpen={setOpen} />
                </div>
              );
            }}
          />
        </>
      )}
    </>
  );
};

export default CowStory;
