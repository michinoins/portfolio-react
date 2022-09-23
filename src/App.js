import './App.css';
import AnimatedCursor from 'react-animated-cursor';
// import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import { useEffect } from 'react';
import AllRoutes from './router/AllRoutes';

function App() {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <AnimatedCursor outerSize={20} />
      {/* /* <ScrollToTop /> */}
      <AllRoutes />
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
