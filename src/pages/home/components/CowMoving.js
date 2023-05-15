import movingcow from '../../../assets/images/movingcow.gif';

const CowMoving = () => {
  return (
    <div className="section overflow-hidden bg-[#EC3E37]">
      <div
        class="flex justify-end items-end w-[110%] h-[60%] bg-[#C73431] origin-bottom-left rotate-[-7deg] translate-x-[-10px]"
        style={{ zIndex: -10 }}
      >
        <div className="w-[110%]">
          <img
            className="max-w-[250px] moving_cow"
            src={movingcow}
            alt="movingcow"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CowMoving;
