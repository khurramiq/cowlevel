import cowheaderlogo from '../assets/images/cowheaderlogo.png';
import { FaBars } from 'react-icons/fa';

const CowLevelHeader = () => {
  return (
    <div className="z-[100] absolute left-0 right-0 top-0">
      <div className="w-[1200px] mx-auto p-5 flex justify-between items-center">
        <img
          className="w-[60px] h-[40px]"
          src={cowheaderlogo}
          alt="cowheaderlogo"
        />
        <FaBars className="text-3xl mr-5" />
      </div>
    </div>
  );
};

export default CowLevelHeader;
