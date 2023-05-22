import board from '../../../assets/images/board.png';
import fiPMELogo from '../../../assets/images/fiPMELogo.png';
import cowlinkimage from '../../../assets/images/cowlinkimage.png';
import Marquee from 'react-fast-marquee';
import stefanfipme from '../../../assets/images/stefanfipme.png';
import Fade from 'react-reveal/Fade';

const MovingText = () => {
  return (
    <div className="absolute top-[100%] w-screen h-screen overflow-hidden bg-[#EC3E37]">
      <div
        class="flex flex-col justify-between items-center w-[120%] sm:h-[60%] xs:h-[50%] bg-[#C73431] origin-bottom-left rotate-[-7deg]"
        style={{ zIndex: -10 }}
      >
        <div className="w-[120px] relative sm:top-[50px] xs:top-[0px] left-[-20%] rotate-[7deg]">
          <img className="badgeAmimation" src={fiPMELogo} alt="fiPMELogo" />
        </div>
        <div className="relative sm:w-[50%] xs:w-[70%] translate-x-[-10%] sm:translate-y-[-30px] xs:translate-y-[-30px]">
          <img className="h-[60px] w-full absolute" src={board} alt="board" />
          <Marquee
            speed={150}
            pauseOnHover
            className="absolute left-[30px] top-[7px] bg-transparent pl-[20px] pr-[20px]"
            style={{ width: 'calc(100% - 60px)' }}
          >
            <div className="text-[#ae4db5] text-[30px]">
              &nbsp;&nbsp;GODS UNCHAINED{' '}
              <span className="text-[#04cd04]">0.26</span>
              &nbsp;&nbsp; GODS UNCHAINED{' '}
              <span className="text-[#ff797a]">0.19</span>
              &nbsp;&nbsp; GODS UNCHAINED{' '}
              <span className="text-[#04cd04]">0.25</span>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="sm:h-[40%] xs:h-[50%] overflow-hidden">
        <div className="h-full flex justify-center sm:items-start xs:items-end">
          <img
            className="xs:w-[50%] sm:w-auto"
            src={stefanfipme}
            alt="twomaninbelowcow"
          />
          <Fade bottom>
            <div className="relative xs:top-[-200px] sm:top-0 border-[3px] border-white p-[10px] text-[15px] rounded-none mb-0  sm:w-[272px] xs:w-[40%] text-white">
              <div className="red_speech_left_arrow" />
              <span className="sm:text-sm xs:text-xs">
                The First International Play Money Exchange (FiPME) is a
                supervised platform for players to safely and quickly trade
                in-game items.
              </span>
              <img
                className="absolute sm:right-0 xs:right-[30px] bottom-[-100px] w-[80px]"
                src={cowlinkimage}
                alt="cowlinkimage"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
