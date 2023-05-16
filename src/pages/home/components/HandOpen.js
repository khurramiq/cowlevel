import bg from '../../../assets/images/bg.png';
import handOpen from '../../../assets/images/handOpen.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const HandOpen = () => {
  return (
    <div className="section relative">
      <CowLevelHeader />
      <img
        className="absolute top-0 w-screen h-screen z-[0]"
        src={bg}
        alt="handOpen"
      />
      <img
        className="absolute top-0 w-screen h-screen z-[1]"
        src={handOpen}
        alt="handOpen"
      />
    </div>
  );
};
export default HandOpen;
