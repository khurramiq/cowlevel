import cowheaderlogo from '../assets/images/cowheaderlogo.png';
import { FaBars } from 'react-icons/fa';
import MobileLinks from './MobileLinks';

const CowLevelHeader = ({ open, setOpen }) => {
  return (
    <div className="z-[100] absolute left-0 right-0 top-0">
      <div className="max-w-[1200px] mx-auto p-5 flex justify-between items-center">
        <img
          className="w-[60px] h-[40px]"
          src={cowheaderlogo}
          alt="cowheaderlogo"
        />
        <div className="relative">
          {open ? (
            <i
              className="far fa-times text-4xl cursor-pointer rotate_animation"
              onClick={() => setOpen(false)}
            ></i>
          ) : (
            <FaBars
              className="text-3xl cursor-pointer rotate-animationR"
              onClick={() => setOpen(true)}
            />
          )}
          {open && <MobileLinks />}
        </div>
      </div>
    </div>
  );
};

export default CowLevelHeader;
