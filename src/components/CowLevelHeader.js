import cowheaderlogo from '../assets/images/cowheaderlogo.png';
import { FaBars } from 'react-icons/fa';
import MobileLinks from './MobileLinks';
import { Link } from 'react-router-dom';

const CowLevelHeader = ({ open, setOpen }) => {
  return (
    <div className="z-[100] absolute left-0 right-0 top-0">
      <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
        <Link to="/">
          <img
            className="sm:w-[60px] xs:w-[50px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
        </Link>
        <div className="relative">
          {open ? (
            <i
              className="far fa-times text-4xl cursor-pointer rotate_animation"
              onClick={() => setOpen(false)}
            ></i>
          ) : (
            <FaBars
              className="sm:text-3xl xs:text-lg cursor-pointer rotate-animationR"
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
