import movingcow from '../../../assets/images/movingcow.gif';
import twomaninbelowcow from '../../../assets/images/twomaninbelowcow.png';
import leftAngle from '../../../assets/images/leftAngle.png';

const CowMoving = () => {
  return (
    <div className="absolute top-[100%] w-screen h-screen overflow-hidden bg-[#EC3E37]">
      <div
        class="flex justify-end items-end w-[110%] h-[60%] bg-[#C73431] origin-bottom-left rotate-[-7deg] translate-x-[-10px]"
        style={{ zIndex: -10 }}
      >
        <div className="w-[110%]">
          <img
            className="max-w-[250px] moving_cow"
            src={movingcow}
            alt="movingcow"
          />
        </div>
      </div>
      <div className="h-[40%] overflow-hidden">
        <div className="flex justify-center">
          <div className="relative border-[3px] border-white p-[10px] text-[100%] rounded-none mb-0 pb-0 w-[272px] h-[94px] text-white">
            <span>
              An investment in cow level is an investment in the protection of
              gamers…
            </span>
            <div className="red_speech_right_arrow" />
          </div>
          <img
            className="w-[397px] h-[283px]"
            src={twomaninbelowcow}
            alt="twomaninbelowcow"
          />
          <div className="relative border-[3px] border-white p-[10px] text-[15px] rounded-none mb-0 pb-0 w-[272px] h-[94px] text-white">
            <div className="red_speech_left_arrow" />
            <span>
              …and the creation of wealth through gaming. Thank you for your
              support.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CowMoving;
