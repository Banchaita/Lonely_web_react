import React from "react";
import { Layout } from 'antd';
import { Link } from "react-router-dom";
const { Footer } = Layout;

const MyFooterOne = ({bgColor}) => {
  // console.log(bgColor)
  return (
    <Footer className="footer text-center p-5" style={{ width: '100%', textAlign: 'center', color: 'white', background: bgColor, backgroundPosition: 'center', backgroundSize: '100% 100%' }}>
      <img src="plugins/images/Mask Group 27.png" style={{width: '200px'}}/>
      <div className="d-flex justify-content-center alignitems-center flex-wrap">
        <Link to={"/"} className="footer-link">Home</Link>
        <Link to={"/aboutus"} className="footer-link">About Us</Link>
        <Link to={"/whyus"} className="footer-link">Why Us</Link>
        <Link to={"/contact"} className="footer-link">Contact Us</Link>
        <Link to={"/setting"} className="footer-link">Settings</Link>
      </div>
    </Footer>
  );
}
export default MyFooterOne;