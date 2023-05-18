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
            <img className="w-[100px] mr-[100px]" src={mi1} alt="mi1" />
            <img className="w-[100px] mr-[100px]" src={mi2} alt="mi2" />
            <img className="w-[100px] mr-[100px]" src={mi3} alt="mi3" />
            <img className="w-[100px] mr-[100px]" src={mi4} alt="mi4" />
            <img className="w-[100px] mr-[100px]" src={mi5} alt="mi5" />
            <img className="w-[100px] mr-[100px]" src={mi6} alt="mi6" />
          </Marquee>
        </div>
      </div>
      <div className="sm:h-[40%] xs:h-[50%] xs:w-[90%] mx-auto overflow-hidden">
        <div className="flex justify-center sm:items-start xs:items-center">
          <Fade left>
            <div className="relative border-[3px] border-white p-[10px] text-[100%] rounded-none mb-0 sm:w-[350px] xs:w-[30%] sm:h-[120px] xs:h-auto text-white">
              <span className="sm:text-sm xs:text-xs">
                We built an exchange environment around this growing asset class
                in line with game publishers and partners to create a whole new
                financial market.
              </span>
              <div className="blue_speech_right_arrow" />
            </div>
          </Fade>
          <Fade bottom>
            <img
              className="xs:w-[30%] sm:w-auto"
              src={borisavatar}
              alt="borisavatar"
            />
          </Fade>
          <div className="relative w-[272px]">
            <img
              className="absolute left-5 bottom-[-200px] w-[80px]"
              src={cowlinkimage}
              alt="cowlinkimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingIcons;
