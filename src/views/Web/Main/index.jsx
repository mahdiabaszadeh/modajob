/** @format */

import React from "react";
import styles from "./main.module.scss";

import { Col, Row, Button } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { HiViewList } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import ReactSelect from "react-select";

import introImagePic from "@Assets/images/intro-img.png";
import landingLearnPic from "@Assets/images/landing-learn.png";
import jobLandingPic from "@Assets/images/job-landing.png";
import authPic from "@Assets/images/auth.png";
import aboutPic from "@Assets/images/about.png";
import introDownloadPic from "@Assets/images/intro-download.png";



const Main = () => {
  return (
    <main className={styles.main}>
      <Col md={{ span: 10, offset: 1 }} className="mx-auto">
        {/* --------------- intro section ---------------- */}
        <Row className={styles["start-sections"]}>
          <Col
            md={{ span: 6, order: 1 }}
            sm={{ span: 12, order: 2 }}
            className={styles["right-intro"]}
          >
            <Col>
              <p className={styles["title"]}>
                برای هر شخصی، <br />
                یک شغل مناسب هست
                <br />
              </p>
              <p className={styles["sub-title"]}>
                مداجاب از طریق رزومه ها و توانمندی های شما، از میان موقعیت های
                شغلی ثبت شده، جایی که به آن تعلق دارید را پیدا می‌کند.
              </p>
              {/* ----------- searchbox ------------ */}
              <Row className={"align-items-center " + styles["searchbox"]}>
                <Col md={3}>
                  <BiSearchAlt2 />
                  <ReactSelect
                    // value={selectedJob}
                    // onChange={(val) => setSelectedJob(val)}
                    // options={job}
                    instanceId={1}
                    className={styles["react-select"]}
                    simpleValue
                    placeholder="عنوان شغلی"
                    noOptionsMessage={() => "مقداری یافت نشد"}
                  />
                </Col>
                <Col md={3} className={styles["search-border"]}>
                  <ImLocation />
                  <ReactSelect
                    // value={selectedCity}
                    // onChange={(val) => setSelectedCity(val)}
                    // options={city}
                    instanceId={2}
                    className={styles["react-select"]}
                    simpleValue
                    placeholder="همه استان‌ها"
                    noOptionsMessage={() => "مقداری یافت نشد"}
                  />
                </Col>
                <Col md={3} className={styles["search-border"]}>
                  <HiViewList />
                  <ReactSelect
                    // value={selectedCategory}
                    // onChange={(val) => setSelectedCategory(val)}
                    // options={category}
                    instanceId={3}
                    className={styles["react-select"]}
                    simpleValue
                    placeholder="همه دسته‌بندی‌ها"
                    noOptionsMessage={() => "مقداری یافت نشد"}
                  />
                </Col>
                <Col md={3} sm={12} className="p-0">
                  <Button
                    className={"full-width " + styles["search-btn"]}
                    // onClick={search}
                  >
                    جستجوی مشاغل
                  </Button>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col
            md={{ span: 6, order: 2 }}
            sm={{ span: 12, order: 1 }}
            className={styles["intro-img"]}
          >
            <img src={introImagePic} />
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 12, order: 3 }}>
            <p className={styles["agahi-title"]}>
              جدیدترین آگهی‌های مد، پوشاک و نساجی
            </p>
            <p className={styles["agahi-sub-title"]}>به دنبال کار می گردید؟</p>
          </Col>
        </Row>
        {/* --------------- ad section ---------------- */}
        <Row className="mt45">
          {/* {adList.map((e, index) => (
            <Col lg={6} md={12} key={index}>
              <Col
                md={12}
                className={
                  (e.IsInstant && styles["urgent"]) +
                  " p20 mb30 " +
                  styles["result"]
                }
              >
                <Row>
                  <Col md={9}>
                    <a href="/" className="pull-right full-height ml20">
                      <img
                        width="50"
                        src="https://cdn.zeplin.io/5fa5b675047dce4c526c7c31/assets/1c742acc-710a-4bd2-85b9-bf41d9b6094e.png"
                      />
                    </a>
                    <h3 className={styles["title"]}>
                      {e.Title}
                      {e.IsInstant && (
                        <span className={styles["urgent"]}>استخدام فوری</span>
                      )}
                    </h3>
                    <p className={"mt30 " + styles["description"]}>
                      <BsBuilding className="ml6 mt_5" />
                      {e.CompanyNameIr}
                    </p>
                    <p
                      className={
                        "d-flex justify-content-between " +
                        styles["description"]
                      }
                    >
                      <span>
                        <HiOutlineLocationMarker className="ml6 mt_5" />
                        {e.CityTitle}
                      </span>
                      <span>
                        <FaBorderStyle className="ml6 mt_5" />
                        {e.JobTitle}
                      </span>
                      <span className={styles["time"]}>
                        <BiTimeFive className="ml6" />
                        {e.JobTypeTitle}
                      </span>
                    </p>
                  </Col>
                  <Col
                    md={3}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Button className={styles["send-cv-btn"]}>
                      ارسال رزومه
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Col>
          ))} */}
        </Row>
        <Row className="mt-3">
          <Button
            className={styles["see-agahi"]}
            onClick={() => router.push("/jobs")}
          >
            مشاهده همه آگهی‌ها
            <BsArrowLeft />
          </Button>
        </Row>
        <Row className="mt-3">
          <img src={landingLearnPic} width="100%" />
        </Row>
        <Row
          className={" d-flex align-items-center " + styles["good-job-section"]}
        >
          <Col md={6} className={styles["intro-img"]}>
            <img src={jobLandingPic} />
          </Col>
          <Col md={6} className={styles["right-intro"]}>
            <p className={styles["title"]}>
              برای هر شخصی، شغل مناسب خودت رو پیدا کن
            </p>
            <p className={"mt30 mb30 " + styles["sub-title"]}>
              تست آنلاین استعدادیابی شغلی، برمبنای استاندارد O*NET
            </p>
            <p className={styles["sub-title"]}>
              بسته‌های استعدادیابی و هدایت شغلی پروفایل‌سنتر اختصاصاً برای
              کارجویان طراحی شده‌اند و هدف آن‌ها پیشنهاد مناسب‌ترین شغل برای
              هدف‌گذاری و برنامه‌ریزی، بر مبنای اصول علمی است. برای این منظور از
              تست‌ها و آزمون‌های استاندارد شناختی برای سنجش مجموعه‌ای از صفات
              درونی و توانمندی‌های اکتسابی، بهره گرفته شده است که همگی، آزمون‌ها
              و پرسشنامه‌های مورد تائید مرکز اطلاعات مشاغل اونِت (O*NET) هستند.
            </p>
            <Button>
              انتخاب تست
              <BsArrowLeft />
            </Button>
          </Col>
        </Row>
        <Row className={styles["blog"]}>
          <Col md={12}>
            <p className={styles["blog-title"]}>مجله تصویری مداجاب</p>
            <p className={styles["blog-sub-title"]}>
              مطالب و آموزش های مرتبط با پیدا کردن شغل و موفقیت در آن اینجا قرار
              می گیرند
            </p>
          </Col>
        </Row>
        <Row className={"mt-3 " + styles["blog"]}>
          <Col md={4} className="mt-5">
            <Col md={12} className={styles["detail"]}>
              <img className={styles["img"]} src={authPic} alt="" />
              <Col md={12}>
                <img
                  className={styles["profile"]}
                  src={aboutPic}
                  alt=""
                />
                <span className={styles["name"]}>کاترین سامانی</span>
              </Col>
              <Col md={12} className={styles["title-container"]}>
                <p className={styles["title"]}>طراح لباس پوشاک زنانه و دوزی</p>
                <p className={styles["description"]}>
                  دقایقی پیش | قرچک، تهران
                </p>
              </Col>
              <Col md={12} className={styles["more-info"]}>
                <Row>
                  <Col>
                    <span className={styles["date"]}>1399/07/22</span>
                  </Col>
                  <Col className="text-lg-right text-md-left">
                    <span className={styles["info"]}>
                      اطلاعات بیشتر
                      <BsArrowLeft />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
          <Col md={4} className="mt-5">
            <Col md={12} className={styles["detail"]}>
              <img className={styles["img"]} src={authPic} alt="" />
              <Col md={12}>
                <img
                  className={styles["profile"]}
                  src={aboutPic}
                  alt=""
                />
                <span className={styles["name"]}>کاترین سامانی</span>
              </Col>
              <Col md={12} className={styles["title-container"]}>
                <p className={styles["title"]}>طراح لباس پوشاک زنانه و دوزی</p>
                <p className={styles["description"]}>
                  دقایقی پیش | قرچک، تهران
                </p>
              </Col>
              <Col md={12} className={styles["more-info"]}>
                <Row>
                  <Col>
                    <span className={styles["date"]}>1399/07/22</span>
                  </Col>
                  <Col className="text-lg-right text-md-left">
                    <span className={styles["info"]}>
                      اطلاعات بیشتر
                      <BsArrowLeft />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
          <Col md={4} className="mt-5">
            <Col md={12} className={styles["detail"]}>
              <img className={styles["img"]} src={authPic} alt="" />
              <Col md={12}>
                <img
                  className={styles["profile"]}
                  src={aboutPic}
                  alt=""
                />
                <span className={styles["name"]}>کاترین سامانی</span>
              </Col>
              <Col md={12} className={styles["title-container"]}>
                <p className={styles["title"]}>طراح لباس پوشاک زنانه و دوزی</p>
                <p className={styles["description"]}>
                  دقایقی پیش | قرچک، تهران
                </p>
              </Col>
              <Col md={12} className={styles["more-info"]}>
                <Row>
                  <Col>
                    <span className={styles["date"]}>1399/07/22</span>
                  </Col>
                  <Col className="text-lg-right text-md-left">
                    <span className={styles["info"]}>
                      اطلاعات بیشتر
                      <BsArrowLeft />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
        </Row>
        <Row className="mt-3">
          <Button
            className={styles["see-agahi"]}
            onClick={() => router.push("/blog")}
          >
            همه مطالب
            <BsArrowLeft />
          </Button>
        </Row>
        <Row className="mt45">
          <img src={introDownloadPic} width="100%" />
        </Row>
      </Col>
    </main>
  );
};

export default Main;
