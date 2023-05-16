import board from '../../../assets/images/board.png';
import cowlinkimage from '../../../assets/images/cowlinkimage.png';
import Marquee from 'react-fast-marquee';
import stefanfipme from '../../../assets/images/stefanfipme.png';
import leftAngle from '../../../assets/images/leftAngle.png';

const MovingText = () => {
  return (
    <div className="absolute top-[100%] w-screen h-screen overflow-hidden bg-[#EC3E37]">
      <div
        class="flex justify-center items-end w-[110%] h-[60%] bg-[#C73431] origin-bottom-left rotate-[-7deg] translate-x-[-10px]"
        style={{ zIndex: -10 }}
      >
        <div className="relative w-[50%] translate-x-[-10%] translate-y-[-30px]">
          <Marquee
            speed={150}
            pauseOnHover
            className="absolute left-[30px]  top-[7px] pl-[20px] pr-[20px]"
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
          <img className="h-[60px] w-full absolute" src={board} alt="board" />
        </div>
      </div>
      <div className="h-[40%] overflow-hidden">
        <div className="flex justify-center items-start">
          <img src={stefanfipme} alt="twomaninbelowcow" />
          <div className="relative border-[3px] border-white p-[10px] text-[15px] rounded-none mb-0  w-[272px] text-white">
            <img
              className="absolute left-[-24px] top-[40px]"
              src={leftAngle}
              alt="leftAngle"
            />
            <span>
              The First International Play Money Exchange (FiPME) is a
              supervised platform for players to safely and quickly trade
              in-game items.
            </span>
            <img
              className="absolute right-0 bottom-[-100px] w-[80px]"
              src={cowlinkimage}
              alt="cowlinkimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
