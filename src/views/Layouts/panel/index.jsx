import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const PanelLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
        <Footer />
      </div>

      <Sidebar />
    </div>
  );
};

export default PanelLayout;
