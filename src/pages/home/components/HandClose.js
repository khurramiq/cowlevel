import clh from '../../../assets/images/clh.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import CowMoving from './CowMoving';
import { FaBars } from 'react-icons/fa';

const HandClose = ({ fullpageApi }) => {
  return (
    <div className="section relative overflow-x-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="w-[1200px] mx-auto p-5 flex justify-between items-center">
          <img
            className="w-[60px] h-[40px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
          <FaBars className="text-3xl mr-5" />
        </div>
      </div>
      <div className="top-0 absolute xs:flex xs:items-center h-screen w-screen overflow-hidden bg-[#CAD5CC]">
        <img className="relative w-full" src={clh} alt="closinghand" />
      </div>
      <CowMoving fullpageApi={fullpageApi} />
    </div>
  );
};

export default HandClose;
