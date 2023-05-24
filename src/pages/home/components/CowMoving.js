import movingcow from '../../../assets/images/movingcow.gif';
import twomaninbelowcow from '../../../assets/images/twomaninbelowcow.png';
import cowlinkimage from '../../../assets/images/cowlinkimage.png';
import Fade from 'react-reveal/Fade';
import { FaAngleUp } from 'react-icons/fa';

const CowMoving = ({ fullpageApi }) => {
  return (
    <div className="absolute top-[100%] w-screen h-full overflow-hidden bg-[#EC3E37] z-[2]">
      <div
        class="flex justify-end items-end w-[120%] sm:h-[60%] xs:h-[50%] bg-[#C73431] origin-bottom-left rotate-[-7deg] translate-x-[-10px]"
        style={{ zIndex: -10 }}
      >
        <div className="w-[110%]">
          <img
            className="sm:max-w-[250px] xs:max-w-[150px] moving_cow"
            src={movingcow}
            alt="movingcow"
          />
        </div>
      </div>
      <div className="sm:h-[40%] xs:h-[50%] xs:flex xs:items-center sm:block overflow-hidden">
        <div className="relative h-full flex justify-center sm:items-start xs:items-end">
          <div className="sm:hidden xs:inline-block absolute top-[20px] left-[20px]">
            <Fade bottom>
              <div className="relative border-[3px] border-white p-[10px] text-[100%] rounded-none mb-0 sm:w-[272px] xs:w-[30%] sm:h-[94px] xs:h-auto text-white">
                <span className="sm:text-sm xs:text-xs">
                  An investment in cow level is an investment in the protection
                  of gamers…
                </span>
                <div className="red_speech_right_arrow" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="xs:hidden sm:inline-block relative left-[50px] border-[3px] border-white p-[10px] text-[100%] rounded-none mb-0 sm:w-[290px] xs:w-[30%] sm:h-[94px] xs:h-auto text-white">
              <span className="sm:text-sm xs:text-xs">
                An investment in cow level is an investment in the protection of
                gamers…
              </span>
              <div className="red_speech_right_arrow" />
            </div>
          </Fade>
          <img
            className="sm:w-[397px] sm:h-[283px] xs:w-[70%]"
            src={twomaninbelowcow}
            alt="twomaninbelowcow"
          />
          <Fade bottom>
            <div className="relative left-[-50px] xs:hidden sm:inline-block border-[3px] border-white p-[10px] text-[15px] rounded-none mb-0 sm:w-[272px] xs:w-[30%] sm:h-[94px] xs:h-auto text-white">
              <div className="red_speech_left_arrow" />
              <span className="sm:text-sm xs:text-xs">
                …and the creation of wealth through gaming. Thank you for your
                support.
              </span>
              <img
                className="absolute right-0 bottom-[-100px] w-[80px]"
                src={cowlinkimage}
                alt="cowlinkimage"
              />
            </div>
          </Fade>
          <div className="sm:hidden xs:inline-block absolute top-[20px] right-[-270px]">
            <Fade bottom>
              <div className="relative border-[3px] border-white p-[10px] text-[15px] rounded-none mb-0 sm:w-[272px] xs:w-[30%] sm:h-[94px] xs:h-auto text-white">
                <div className="red_speech_left_arrow" />
                <span className="sm:text-sm xs:text-xs">
                  …and the creation of wealth through gaming. Thank you for your
                  support.
                </span>
                <img
                  className="absolute right-0 bottom-[-100px] w-[80px]"
                  src={cowlinkimage}
                  alt="cowlinkimage"
                />
              </div>
            </Fade>
          </div>
        </div>
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

export default CowMoving;
