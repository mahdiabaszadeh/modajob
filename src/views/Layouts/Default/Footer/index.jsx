import { Col, Row } from "react-bootstrap";
import React from "react";
import styles from "./footer.module.scss";
// import axios from "axios";

import logo from '@Assets/images/logo.png';
import sign from '@Assets/images/sign.png';

const Footer = () => {
    // const [error, setError] = useState({});
    // const [email, setEmail] = useState('');

    // let subscribe = () => {
    //     if(!email || email === ''){
    //         let errorObj = {};
    //         errorObj.email = 'این فیلد اجباری است.';
    //         setError(errorObj)
    //     } else {
    //         let errorObj = {};

    //         axios.post(`${publicRuntimeConfig.backendUrl}/GeneralNewsletter`, {email})
    //             .then((response) => {
    //                 toast.success('با موفقیت انجام شد.')
    //             })
    //             .catch((error) => {
    //                 if(error?.response?.data?.errorData){
    //                     let parseData = JSON.parse(error?.response?.data?.errorData);

    //                     parseData.forEach((item) => {
    //                         if(item.PopUp === true){
    //                             toast.error(item.Message)
    //                         } else {
    //                             item.Field?.toLowerCase() === 'email'.toLowerCase() && (errorObj.smsCode = item.Message);
    //                         }
    //                     });

    //                     setError(errorObj);
    //                 }

    //             })
    //     }
    // };

    return(
        <div>
            <Col md={12} className={styles['footer']}>
                <Col md={8} className={styles['register'] + ' mx-auto'}>
                    <Row>
                        <Col md={4} sm={12} className="d-flex align-items-center">
                            <p className={styles['title']}> عضویت در <span className="w-100 d-none d-md-block"/>خبرنامه مداجاب</p>
                        </Col>
                        <Col md={8} sm={12} className="d-flex align-items-center">
                            {/* <InputGroup className={styles['input-group']}>
                                <FormControl
                                    type="text"
                                    placeholder="ایمیل خود را وارد نمایید ..."
                                    className={styles['input-group-prepend '] + error.email && 'error-form'}
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text
                                        className={styles['input-group-text']}
                                        onClick={subscribe}
                                    >
                                        ارسال کنید
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup> */}
                        </Col>
                    </Row>
                </Col>
                <Col md={10} className={'text-center pt4 pb4 mx-auto'}>
                    <Row className={styles['footer-phone']}>
                        <Col md={6} xs={6} className={styles.right}>
                           <p>
                               پشتیبانی آگهی
                           </p>
                            <p>
                                support@modajob.ir
                            </p>
                        </Col>
                        <Col md={6} xs={6} className={styles.left}>
                           <p>
                               پشتیبانی واتس آپ
                           </p>
                            <p>
                                09026621005
                            </p>
                        </Col>
                    </Row>
                    <Row className={styles.links}>
                        <Col md={3} sm={6} xs={6}>
                            <img src={logo}className={styles.logo} />
                            <img src={sign} className={styles['sign']} />
                            <Row className={styles['social']}>
                                <a href="">
                                    <img src="/images/social/linkedin.svg" width="20" />
                                </a>
                                <a href="">
                                    <img src="/images/social/aparat.svg" width="20" />
                                </a>
                                <a href="">
                                    <img src="/images/social/twitter.svg" width="20" />
                                </a>
                                <a href="">
                                    <img src="/images/social/youtube.svg" width="20" />
                                </a>
                                <a href="">
                                    <img src="/images/social/instagram.svg" width="20" />
                                </a>
                                <a href="">
                                    <img src="/images/social/telegram.svg" width="20" />
                                </a>
                            </Row>
                        </Col>
                        <Col md={3} sm={6} xs={6}>
                            <p className={styles.title}>مداجاب</p>
                            {/* <Link href={'/contact'}> */}
                                <a>تماس با مداجاب</a>
                            {/* </Link> */}
                            {/* <Link href={'/about'}> */}
                                <a>درباره ما مداجاب</a>
                            {/* </Link> */}
                            {/* <Link href={'/blog'}> */}
                                <a>وبلاگ</a>
                            {/* </Link> */}
                        </Col>
                        <Col md={3} sm={6} xs={6}>
                            <p className={styles.title}>کارفرمایان</p>
                            {/* <Link href={'/'}> */}
                                <a>درج آگهی استخدام</a>
                            {/* </Link> */}
                            {/* <Link href={'/login'}> */}
                                <a>ورود به بخش کارفرمایان</a>
                            {/* </Link> */}
                            {/* <Link href={'/FAQ'}> */}
                                <a>سؤالات متداول</a>
                            {/* </Link> */}
                            {/* <Link href={'/'}> */}
                                <a>راهنمای استفاده</a>
                            {/* </Link> */}
                        </Col>
                        <Col md={3} sm={6} xs={6}>
                            <p className={styles.title}>کارجویان</p>
                            {/* <Link href={'/jobs'}> */}
                                <a>فرصت های شغلی</a>
                            {/* </Link> */}
                            {/* <Link href={'/register'}> */}
                                <a>ورود / ثبت‌نام کارجو</a>
                            {/* </Link> */}
                            {/* <Link href={'/'}> */}
                                <a> ایمیل‌های اطلاع‌رسانی</a>
                            {/* </Link> */}
                            {/* <Link href={'/'}> */}
                                <a>رزومه‌ساز آنلاین</a>
                            {/* </Link> */}
                            {/* <Link href={'/companies'}> */}
                                <a>آشنایی با شرکت‌ها</a>
                            {/* </Link> */}
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col className={styles["sub-footer"]}>
                <Row>
                    <Col md={10} className="mx-auto">
                        <Row>
                            <Col md={6} sm={7} className={"d-flex justify-content-start " + styles['right-container']}>
                                <p className='align-self-center'>
                                    تمامی حقوق این وبسایت برای مٌداجاب محفوظ است.
                                </p>
                            </Col>
                            <Col md={6} sm={5}  className={styles['left-container']}>
                                <p>
                                    Copyright 2018 modajob.com
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default Footer
