import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer className="footer text-center p-0" style={{ width: '100%', textAlign: 'center', color: 'white', background: `#161616` }}>
      <p className="text-center text-light pt-3">© 2021 - All Rights Reserved - Lonely AF | Design & Developed by solidappmaker</p>
    </Footer>
  );
}
export default MyFooter;