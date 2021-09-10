/** @format */

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./header.module.scss";
import Navbar from "@Components/Hybrids/Navbar";
import { Link } from "react-router-dom";
import Logo from "@Assets/images/logo.png";

const Header = () => (
  <div className={styles.header}>
    <Col md={10} className={styles["top-header"] + " mx-auto"}>
      <Row>
        <Col lg={{ span: 9 }} md={{ span: 12 }}>
          <img src={Logo} />
          <span className={styles["title"]}>
            جامع ترین سامانه آگهی‌های استخدامی صنعت مد، پوشاک و نساجی
          </span>
        </Col>
        <Col
          lg={{ span: 3 }}
          md={{ span: 12 }}
          className="justify-content-md-center justify-content-lg-end d-flex"
        >
          <Button className={"d-lg-block d-none " + styles["register-btn"]}>
            <Link to="/register">ثبت‌نام</Link>
          </Button>
          <span className={styles["login"]}>
            <Link to="/login" className="d-lg-block d-none">
              ورود
            </Link>
          </span>
        </Col>
      </Row>
    </Col>
    <Col md={{ span: 10, offset: 1 }} className="pb15">
      <Navbar />
    </Col>
  </div>
);

export default Header;
