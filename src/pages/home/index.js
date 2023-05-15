import ReactFullpage from '@fullpage/react-fullpage';
import HandOpen from './components/HandOpen';
import HandClose from './components/HandClose';
import ElevatorScene from './components/ElevatorScene';
import Stefanavatar from './components/Stefanavatar';
import Footer from '../../components/footer';
import SignupForm from './components/SignupForm';
import CowMoving from './components/CowMoving';

// const Home = () => {
//   return (
//     <div>
//       <HandOpen />
//       <HandClose />
//       <div style={{ width: '100vw', height: '100vh' }}></div>
//     </div>
//   );
// };
const Home = () => {
  // const anchors = [
  //   'page1',
  //   'page2',
  //   'page3',
  //   'page4',
  //   'page5',
  //   'page6',
  //   'page7',
  // ];
  return (
    <>
      <ReactFullpage
        navigation
        // navigationTooltips={anchors}
        scrollingSpeed="700"
        animateAnchor={true}
        keyboardScrolling={true}
        easing="easeInOutCubic"
        onLeave={(origin, destination, direction) => {
          console.log('onLeave event', { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log('state', state);
          return (
            <div>
              <ElevatorScene />
              <Stefanavatar />
              <HandOpen />
              <HandClose />
              <CowMoving />
              <div className="section" style={{ background: '#F4423F' }}></div>
              <SignupForm />
              <Footer />
            </div>
          );
        }}
      />
    </>
  );
};

export default Home;
