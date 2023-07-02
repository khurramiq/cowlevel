import { FaBars } from 'react-icons/fa';
import headerLogo from '../../../assets/images/headerLogo.png';
import investInTheCow from '../../../assets/images/investInTheCow.png';
import { Link } from 'react-router-dom';
import MobileLinks from './MobileLinks';

const Header1 = ({ fullpageApi, open, setOpen }) => {
  return (
    <div className="z-[100] absolute left-0 right-0 top-0">
      <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
        <div>
          <Link to="/" onClick={() => fullpageApi.moveTo(1)}>
            <img
              className="sm:w-[90px]  xs:w-[50px]"
              src={headerLogo}
              alt="headerLogo"
            />
          </Link>
        </div>
        <ul className="sm:flex xs:hidden text-[#212934] text-[18px]">
          <li className="pl-5 pr-5">
            <Link
              to={'/cow-story'}
              onClick={() => fullpageApi.moveTo(1)}
              className="hover:text-red-600"
            >
              COW STORY
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link
              to={'/invest'}
              onClick={() => fullpageApi.moveTo(1)}
              className="hover:text-red-600"
            >
              INVEST
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link
              to={'/fipme'}
              onClick={() => fullpageApi.moveTo(1)}
              className="hover:text-red-600"
            >
              FiPME
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link
              to={'/solutions'}
              onClick={() => fullpageApi.moveTo(1)}
              className="hover:text-red-600"
            >
              SOLUTIONS
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link
              to={'/moos'}
              onClick={() => fullpageApi.moveTo(1)}
              className="hover:text-red-600"
            >
              MOOS
            </Link>
          </li>
        </ul>
        <div>
          <div className="relative">
            {open ? (
              <i
                className="far fa-times text-4xl cursor-pointer rotate_animation"
                onClick={() => setOpen(false)}
              ></i>
            ) : (
              <FaBars
                className="sm:text-3xl xs:text-lg xs:inline-block sm:hidden"
                onClick={() => setOpen(true)}
              />
            )}
            {open && <MobileLinks />}
          </div>
          <Link
            to="/test-page/#invest_form"
            onClick={() => fullpageApi.moveTo(4)}
          >
            <img
              className="w-[120px] sm:inline-block xs:hidden"
              src={investInTheCow}
              alt="investInTheCow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
