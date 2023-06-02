import React from 'react';
import { Link } from 'react-router-dom';

const MobileLinks = ({ fullpageApi }) => {
  return (
    <ul className="absolute pt-2 pb-2 top-[50px] right-[0px] w-[250px] text-[#212934] text-[18px] bg-[#FFFBE8]">
      <Link
        to={'/cow-story'}
        className="hover:text-red-600"
        onClick={() => fullpageApi.moveTo(1)}
      >
        <li className="mb-1 ml-5">COW STORY</li>
      </Link>
      <Link to={'/invest'} className="hover:text-red-600">
        <li className="mb-1 ml-5">INVEST</li>
      </Link>
      <Link to={'/fipme'} className="hover:text-red-600">
        <li className="mb-1 ml-5">FiPME</li>
      </Link>
      <Link to={'/solutions'} className="hover:text-red-600">
        <li className="mb-1 ml-5">SOLUTIONS</li>
      </Link>
      <Link to={'/moos'} className="hover:text-red-600">
        <li className="ml-5">MOOS</li>
      </Link>
    </ul>
  );
};

export default MobileLinks;
