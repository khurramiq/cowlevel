import footerflower from '../../assets/images/footerflower.png';

const Footer = () => {
  return (
    <div className="section" style={{ background: '#262629' }}>
      <div className="ml-20">
        <img
          className="footer_cow_nose w-[600px]"
          src={footerflower}
          alt="footerflower"
        />
      </div>
    </div>
  );
};

export default Footer;
