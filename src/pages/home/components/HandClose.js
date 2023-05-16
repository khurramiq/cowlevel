import clh from '../../../assets/images/clh.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import CowMoving from './CowMoving';
import { FaBars } from 'react-icons/fa';

const HandClose = () => {
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
      <div className="top-0 absolute h-screen w-screen overflow-hidden">
        <img className="relative w-full" src={clh} alt="closinghand" />
      </div>
      <CowMoving />
    </div>
  );
};
//   return (
//     <div
//       className="section"
//       //   style={{
//       //     backgroundImage: `url(${bg})`,
//       //     backgroundSize: 'cover',
//       //     backgroundPosition: 'center',
//       //     backgroundRepeat: 'no-repeat',
//       //     height: '100vh',
//       //   }}
//     >
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 400,
//             properties: [
//               {
//                 startValue: 0,
//                 endValue: 1,
//                 property: 'opacity',
//               },
//             ],
//           },
//         ]}
//         style={
//           scrollValue <= 400
//             ? {
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 zIndex: 100,
//               }
//             : { position: 'static' }
//         }
//       >
//         <img
//           src={bg}
//           style={{ width: '100vw', height: '100vh' }}
//           alt="handOpen"
//         />
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 400,
//             properties: [
//               {
//                 startValue: 0,
//                 endValue: 1,
//                 property: 'opacity',
//               },
//             ],
//           },
//         ]}
//         style={
//           scrollValue <= 400
//             ? {
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 zIndex: 100,
//               }
//             : { position: 'static' }
//         }
//       >
//         <img
//           src={handClose}
//           style={{ width: '100vw', height: '100vh' }}
//           alt="handOpen"
//         />
//       </Plx>
//     </div>
//   );
// };

export default HandClose;
