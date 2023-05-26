import mi1 from '../../../assets/images/mi1.png';
import mi2 from '../../../assets/images/mi2.png';
import mi3 from '../../../assets/images/mi3.png';
import mi4 from '../../../assets/images/mi4.png';
import mi5 from '../../../assets/images/mi5.png';
import mi6 from '../../../assets/images/mi6.png';
import cowlinkimage from '../../../assets/images/cowlinkimage.png';
import Marquee from 'react-fast-marquee';
import borisavatar from '../../../assets/images/borisavatar.png';
import Fade from 'react-reveal/Fade';

const MovingIcons = () => {
  return (
    <div className="absolute top-[100%] w-screen h-screen overflow-hidden bg-[#3D6EB1]">
      <div
        class="flex justify-center items-end w-[120%] sm:h-[60%] xs:h-[50%] bg-[#325C95] origin-bottom-right rotate-[7deg] sm:translate-x-[-200px] xs:translate-x-[-50px]"
        style={{ zIndex: -10 }}
      >
        <div className="relative w-[100%]">
          <Marquee speed={150} className="absolute w-full bottom-0">
            <img
              className="sm:w-[100px] xs:w-[50px] sm:mr-[100px] xs:mr-[50px]"
              src={mi1}
              alt="mi1"
            />
            <img
              className="sm:w-[100px] xs:w-[50px] sm:mr-[100px] xs:mr-[50px]"
              src={mi2}
              alt="mi2"
            />
            <img
              className="sm:w-[100px] xs:w-[50px] sm:mr-[100px] xs:mr-[50px]"
              src={mi3}
              alt="mi3"
            />
            <img
              className="sm:w-[100px] xs:w-[50px] sm:mr-[100px] xs:mr-[50px]"
              src={mi4}
              alt="mi4"
            />
            <img
              className="sm:w-[100px] xs:w-[50px] sm:mr-[100px] xs:mr-[50px]"
              src={mi5}
              alt="mi5"
            />
            <img
              className="sm:w-[100px] xs:w-[50px] sm:mr-[100px] xs:mr-[50px]"
              src={mi6}
              alt="mi6"
            />
          </Marquee>
        </div>
      </div>
      <div className="sm:h-[40%] xs:h-[50%] xs:w-[90%] mx-auto overflow-hidden">
        <div className="relative h-full flex justify-center sm:items-start xs:items-end">
          <Fade left>
            <div className="relative sm:inline-block xs:hidden sm:top-0 xs:top-[-100px] left-[60px] border-[3px] border-white p-[10px] text-[100%] rounded-none mb-0 sm:w-[355px] xs:w-[40%] sm:h-auto xs:h-auto text-white">
              <span className="sm:text-sm xs:text-xs">
                We built an exchange environment around this growing asset class
                in line with game publishers and partners to create a whole new
                financial market.
              </span>
              <div className="blue_speech_right_arrow" />
            </div>
          </Fade>
          <div className="absolute xs:inline-block sm:hidden sm:top-0 xs:top-[10%] left-0">
            <Fade left>
              <div className="relative border-[3px] border-white p-[5px] text-[100%] rounded-none mb-0 sm:w-[350px] xs:w-[30%] sm:h-[120px] xs:h-auto text-white">
                <span className="sm:text-sm xs:text-[8px]">
                  We built an exchange environment around this growing asset
                  class in line with game publishers and partners to create a
                  whole new financial market.
                </span>
                <div className="blue_speech_right_arrow" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <img
              className="xs:w-[40%] sm:w-auto"
              src={borisavatar}
              alt="borisavatar"
            />
          </Fade>
          <div className="xs:hidden sm:inline-block relative w-[272px]">
            <img
              className="absolute left-5 bottom-[-200px] w-[80px]"
              src={cowlinkimage}
              alt="cowlinkimage"
            />
          </div>
          <img
            className="xs:inline-block sm:hidden absolute sm:top-[100px] xs:top-[50%] right-0 sm:w-[80px] xs:w-[50px]"
            src={cowlinkimage}
            alt="cowlinkimage"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingIcons;
