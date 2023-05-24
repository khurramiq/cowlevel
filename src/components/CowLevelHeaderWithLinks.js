import { FaBars } from 'react-icons/fa';
import headerLogo from '../assets/images/headerLogo.png';
import investInTheCow from '../assets/images/investInTheCow.png';

const CowLevelHeaderWithLinks = () => {
  return (
    <div className="z-[100] absolute left-0 right-0 top-0">
      <div className="max-w-[1200px] mx-auto p-5 flex justify-between items-center">
        <div>
          <img
            className="sm:w-[90px] sm:h-[75px] xs:w-[69px] xs:h-[57px]"
            src={headerLogo}
            alt="headerLogo"
          />
        </div>
        <ul className="sm:flex xs:hidden text-[#212934] text-[18px]">
          <li className="pl-5 pr-5">COW STORY</li>
          <li className="pl-5 pr-5">INVEST</li>
          <li className="pl-5 pr-5">FiPME</li>
          <li className="pl-5 pr-5">SOLUTIONS</li>
          <li className="pl-5 pr-5">MOOS</li>
        </ul>
        <div>
          <FaBars className="text-3xl xs:inline-block sm:hidden" />
          <img
            className="w-[120px] sm:inline-block xs:hidden"
            src={investInTheCow}
            alt="investInTheCow"
          />
        </div>
      </div>
    </div>
  );
};

export default CowLevelHeaderWithLinks;
