import progresslinearrow from '../../../assets/images/progresslinearrow.png';
import currency from '../../../assets/images/currency.png';
import plus from '../../../assets/images/plus.png';
import remort from '../../../assets/images/remort.png';
import equalto from '../../../assets/images/equalto.png';
import mobileslider1 from '../../../assets/images/mobileslider1.png';
import downarrownarrow from '../../../assets/images/downarrownarrow.png';
import CowLevelHeaderWithLinks from '../../../components/CowLevelHeaderWithLinks';

const CowLevelSlide0 = ({ open, setOpen }) => {
  return (
    <div className="section relative  bg-[#FFFBE8]">
      <CowLevelHeaderWithLinks open={open} setOpen={setOpen} />
      <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <div className="sm:w-[50%] xs:w-[80%] rotate-[5deg]">
          <img
            className="w-full"
            src={progresslinearrow}
            alt="progresslinearrow"
          />
        </div>
      </div>
      <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <div className="relative top-[-15px] sm:w-[50%] xs:w-[80%] m-auto flex items-center justify-between">
          <div className="w-[25%]">
            <img
              className="currencyAnimate relative left-[-30px] top-[13px]"
              src={currency}
              alt="currency"
            />
          </div>
          <div className="w-[10%]">
            <img
              className="relative top-[5px] left-[-18px]"
              src={plus}
              alt="plus"
            />
          </div>
          <div className="w-[25%]">
            <img
              className="rotate-[-7deg] relative top-[13px] remoteAnimate"
              src={remort}
              alt="remort"
            />
          </div>
          <div className="w-[11%]">
            <img
              className="relative top-[10px] left-[10px]"
              src={equalto}
              alt="equalto"
            />
          </div>
          <div className="w-[24%] currencyAnimate relative left-[15px]">
            <img src={mobileslider1} alt="mobileslider1" />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <div className="sm:mt-[30%] xs:mt-[60%]">
          <p className="text-center text-2xl font-bold tracking-wide leading-tight">
            COW LEVEL IS A <br /> FINTECH-FOR-GAMING COMPANY
          </p>
          <p className="text-center text-lg font-semibold">THAT'S NO BULL</p>
        </div>
      </div>
      <img
        className="absolute cursor-pointer h-[40px] right-[11%] bottom-[50px]"
        src={downarrownarrow}
        alt="downarrownarrow"
      />
    </div>
  );
};

export default CowLevelSlide0;
