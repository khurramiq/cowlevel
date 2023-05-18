import footerflower from '../../assets/images/footerflower.png';
import footerlogo from '../../assets/images/footerlogo.png';
import footer_animation from '../../assets/images/footer_animation.gif';
import fb from '../../assets/images/fb.png';
import tw from '../../assets/images/tw.png';
import yt from '../../assets/images/yt.png';
import li from '../../assets/images/li.png';

const Footer = () => {
  return (
    <div className="absolute top-[100%] h-screen w-screen overflow-hidden bg-[#262629]">
      <div className="relative h-[250px] sm:ml-20 sm:block xs:flex xs:justify-center">
        <img
          className="absolute footer_cow_nose xs:footer_cow_nosexs xs:w-[300px] sm:w-[600px]"
          src={footerflower}
          alt="footerflower"
        />
      </div>
      <div className="absolute bottom-[90px] left-0 right-0">
        <div className="sm:flex xs:block xs:w-[90%] w-[1200px] mx-auto">
          <div className="sm:w-[50%] xs:w-[100%] text-white">
            <div>
              <img className="w-[80px]" src={footerlogo} alt="footerlogo" />
            </div>
            <ul className="text-[14px] mt-3">
              <li>CONTACT</li>
              <li>PRIVACY POLICY</li>
              <li>COOKIES</li>
              <li>TERMS & CONDITIONS</li>
            </ul>
            <p className="text-[14px] font-bold mt-3 leading-tight">
              COW LEVEL AG
            </p>
            <p className="leading-tight">
              Blegistrasse 1, 6343 Rotkreuz, Switzerland
              <br />
              <span className="text-[14px] hover:text-[#cf2e2e] cursor-pointer">
                Info@bws546.xyz
              </span>
            </p>

            <div className="flex mt-5">
              <img className="w-[40px] mr-4" src={fb} alt="fb" />
              <img className="w-[40px] mr-4" src={tw} alt="tw" />
              <img className="w-[40px] mr-4" src={yt} alt="yt" />
              <img className="w-[40px] mr-4" src={li} alt="li" />
            </div>
          </div>
          <div className="sm:w-[50%] xs:w-[100%] xs:mt-10 xs:block flex justify-end items-center">
            <div className="text-white pr-5">
              <h3 className="text-[28px] pl-5">JOIN THE HERD</h3>
              <p className="text-[18px] mt-2">
                Apply for &nbsp;
                <span className="hover:text-[#cf2e2e] cursor-pointer">
                  jobs@bws546.xyz
                </span>
              </p>
            </div>
            <div className="xs:w-[100%] xs:mt-2 sm:w-[50%]">
              <img
                className="w-full"
                src={footer_animation}
                alt="footer_animation"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-[30px] py-[20px] text-[18px] bg-[#1D242D]">
        <p className="text-[13px] max-w-[1200px] mx-auto text-gray-400">
          All Rights Reserved. (c) 2023 Cow Level AG
        </p>
      </div>
    </div>
  );
};

export default Footer;
