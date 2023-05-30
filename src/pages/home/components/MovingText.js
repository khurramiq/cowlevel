import board from '../../../assets/images/board.png';
import fiPMELogo from '../../../assets/images/fiPMELogo.png';
import cowlinkimage from '../../../assets/images/cowlinkimage.png';
import Marquee from 'react-fast-marquee';
import stefanfipme from '../../../assets/images/stefanfipme.png';
import Fade from 'react-reveal/Fade';

const MovingText = () => {
  return (
    <div className="absolute top-[100%] w-screen h-full overflow-hidden bg-[#EC3E37]">
      <div
        class="flex flex-col justify-between items-center w-[120%] sm:h-[60%] xs:h-[50%] bg-[#C73431] origin-bottom-left rotate-[-7deg]"
        style={{ zIndex: -10 }}
      >
        <div className="md:w-[120px] xs:w-[60px] relative md:top-[50px] xs:top-[0px] sm:left-[-20%] xs:left-[-10%] rotate-[7deg]">
          <img className="badgeAmimation" src={fiPMELogo} alt="fiPMELogo" />
        </div>
        <div className="relative md:w-[50%] xs:w-[70%] translate-x-[-10%] md:translate-y-[-30px] xs:translate-y-[-30px]">
          <img
            className="md:h-[60px] sm:h-[40px] xs:h-[30px] w-full absolute top-0"
            src={board}
            alt="board"
          />
          <Marquee
            speed={150}
            pauseOnHover
            className="absolute md:h-[60px] sm:h-[40px] xs:h-[30px] top-0 left-[30px] bg-transparent pl-[20px] pr-[20px]"
            style={{
              width: 'calc(100% - 60px)',
              overflow: 'hidden',
            }}
          >
            <div className="text-[#ae4db5] md:text-[30px] sm:text-[100%] xs:text-sm">
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
          <Fade bottom>
            <img
              className="xs:w-[55%] sm:w-[30%] w-auto"
              src={stefanfipme}
              alt="twomaninbelowcow"
            />
          </Fade>
          <Fade bottom>
            <div className="relative xs:top-[-52%] sm:top-0 sm:left-[-50px] xs:left-[-15px] border-[3px] border-white sm:p-[10px] xs:p-[5px] text-[15px] rounded-none mb-0  sm:w-[272px] xs:w-[40%] text-white">
              <div className="red_speech_left_arrow" />
              <span className="md:text-sm sm:text-[10px] xs:text-[8px]">
                The First International Play Money Exchange (FiPME) is a
                supervised platform for players to safely and quickly trade
                in-game items.
              </span>
              <img
                className="absolute sm:right-0 xs:right-[10px] md:bottom-[-100px] xs:bottom-[-50px] md:w-[80px] xs:w-[50px]"
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
