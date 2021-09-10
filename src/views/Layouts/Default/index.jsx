/** @format */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./index.module.scss";
import { Col } from "react-bootstrap";

const DefaultLayout = ({ children, fullwidth }) => (
  <div className={styles["main-container"]}>
    <Header />
    <Col>
      {fullwidth === true ? (
        <div>{children}</div>
      ) : (
        <Col md={{ span: 10, offset: 1 }}>{children}</Col>
      )}
    </Col>
    <Footer />
  </div>
);

export default DefaultLayout;
