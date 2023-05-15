// import Plx from 'react-plx';
import bg from '../../../assets/images/bg.png';
import handClose from '../../../assets/images/handClose.png';
// import { useEffect, useState } from 'react';

const HandClose = () => {
  //   const [scrollValue, setScrollValue] = useState(0);
  //   const handleScroll = () => {
  //     const currentScrollValue = window.pageYOffset;
  //     setScrollValue(currentScrollValue);
  //   };

  //   const top = () => {
  //     if (scrollValue <= 400) {
  //       return '0px';
  //     }
  //     return '-100vh';
  //   };

  //   useEffect(() => {
  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <img
        src={handClose}
        style={{ width: '100vw', height: '100vh' }}
        alt="handOpen"
      />
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
