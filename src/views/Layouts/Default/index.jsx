/** @format */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./index.module.scss";
import { CCol, CRow } from "@coreui/react";

const DefaultLayout = ({ children, fullwidth }) => (
  <div className={styles["main-container"]}>
    <Header />
    <CCol>
      {fullwidth === true ? (
        <div>{children}</div>
      ) : (
        <CCol md={{ span: 10, offset: 1 }}>{children}</CCol>
      )}
    </CCol>
    <Footer />
  </div>
);

export default DefaultLayout;
