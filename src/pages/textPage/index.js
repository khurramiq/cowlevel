import { useEffect, useRef, useState } from 'react';
import Slide1 from './components/Slide1';
// import Slide2 from './components/Slide2';
// import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import './styles.css';

const TextPage = () => {
  const [open, setOpen] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="relative">
      <Slide1 elementRef={elementRef} open={open} setOpen={setOpen} />
      {/* <Slide2 open={open} setOpen={setOpen} />
      <Slide3 open={open} setOpen={setOpen} /> */}
      <Slide4 elementRef={elementRef} open={open} setOpen={setOpen} />
    </div>
  );
};

export default TextPage;
