import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./BasePage.css";

const BasePage = (props) => {
  return (
    <>
      <div className='grid' id='base-grid'></div>
      <Navbar />
      <div className='grid' id='base-grid'>
        <div className='col mx-auto'>{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default BasePage;
