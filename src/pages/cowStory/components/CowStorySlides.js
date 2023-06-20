import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CowStorySlide from './CowStorySlide';

const CowStorySlides = () => {
  const CustomNextArrow = (props) => (
    <div className="custom-arrow next" onClick={props.onClick}>
      <i className="fal fa-long-arrow-right text-3xl"></i>
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div className="custom-arrow prev" onClick={props.onClick}>
      <i className="fal fa-long-arrow-left text-3xl"></i>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slidesArray = [
    {
      title: 'EXCHANGE-TRADING COWBOYS',
      desc: 'There’s the treasure hunting Nate & Sully from Uncharted, the scrappy Ryu & Ken from Street Fighter and “mamma mia”, there’s Mario & Luigi from Super Mario Brothers. But now the spotlight is on Boris & Stefan – the real-life exchange-trading duo who founded Cow Level AG.',
    },
    {
      title: 'OUR ORIGIN STORY',
      desc: 'Boris, a top electricity trader and devoted gamer, convinced Stefan, a pioneer in electronic derivative trading, of the need for a safe and secure way to exchange in-game items – a huge, yet unregulated, new asset class.',
    },
    {
      title: 'MOOVE OVER NASDAQ',
      desc: 'In 2018, our dynamic duo built the First International Play Money Exchange, or FiPME, the first real-time marketplace exchange and shop for in-game items.  Then in 2020, they founded Cow Level AG, a fintech-for-gaming company, to oversee operations. With the introduction of compliance and regulation, the buying and trading of in-game items is now quick and reliable, allowing FiPME to ensure the best price execution for gamers and game publishers everywhere.',
    },
  ];
  return (
    // <div className="slider-container">
    <Slider
      {...settings}
      className="xs:w-[70%] sm:w-[40%] md:w-[35%] h-auto text-center mt-5"
    >
      {slidesArray.map((slide, i) => (
        <CowStorySlide key={i} title={slide.title} desc={slide.desc} />
      ))}
    </Slider>
    // </div>
  );
};

export default CowStorySlides;
