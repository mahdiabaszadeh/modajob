import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow,
} from "@coreui/react";
import { useDispatch } from "react-redux";
import Input from "../infrastructure/Input/Index";
import { postRequestToServer, getRequestToServer } from "../utilities/appManager";
import axios from "axios";

const Login = () => {
  const [loginState, setLoginState] = useState({ userName: "", password: "" });
  const { username, password } = loginState;
  let userNameRef = useRef(null);
  let passWordRef = useRef(null);
  const hasUserName = username && username.length > 0;
  const hasPassWord = password && password.length > 0;
  const dispatch = useDispatch();

  const onRequest = () => {};
  const onSuccess = (response) => {};
  const onFailed = () => {};

  const onSubmit = async () => {
    // axios.post(
    //   "api/userAccount/authenticate",
    //   loginState,
    //   onRequest,
    //   onSuccess,
    //   onFailed
    // );
    // getRequestToServer(
    //   "/api/BlogAction/GetSpAll"
    // )
    postRequestToServer(
      "api/userAccount/authenticate",
      loginState,
      onRequest,
      onSuccess,
      onFailed
    );
  };

  return (
    <CCol>
      <CRow>
        <div className="col-md-10 offcet-center">
          <main className="col-md-6 offcet-center">
            {/* ----------- step one ------------ */}
            <CRow className="container">
              <CCol md={8} className="right">
                <p className="title">ورود به مداجاب</p>
                <p className="sub-title">
                  برای استفاده از خدمات مداجاب، وارد حساب کاربری خود شوید.
                </p>
                <CForm /*onSubmit={loginUser}*/>
                  <p className="text-muted"> ورود به حساب کاربری </p>
                  <CRow>
                    <Input
                      type="text"
                      placeholder="شماره همراه"
                      name="userName"
                      aria-describedby="login-userName"
                      value={loginState.userName}
                      onRef={(ref) => {
                        userNameRef = ref;
                      }}
                      changeHandler={(value) => {
                        setLoginState({
                          ...loginState,
                          userName: value.target.value,
                        });
                      }}
                      hasIcon={false}
                      className="form-control"
                      inputContainerClassName="form-group"
                    />
                    <Input
                      type="password"
                      placeholder="رمز عبور"
                      name="password"
                      aria-describedby="login-password"
                      value={loginState.password}
                      onRef={(ref) => {
                        passWordRef = ref;
                      }}
                      changeHandler={(value) => {
                        setLoginState({
                          ...loginState,
                          password: value.target.value,
                        });
                      }}
                      hasIcon={false}
                      className="form-control"
                      inputContainerClassName="form-group"
                    />
                  </CRow>
                  {/* <CForm.Group controlId="formBasicEmail">
                    <CForm.Control
                        type="text"
                        placeholder=" شماره همراه خود را وارد نمایید"
                        // value = {userName}
                        // onChange = {(e) => setUserName(e.target.value)}
                    // className={error.userName && 'error-form'}
                    />
                    <span className='error-text'>
                        {/* {error.userName} 
                        </span>
                </CForm.Group>
                <CForm.Group>
                    <CForm.Control
                        type="password"
                        placeholder="رمز عبور خود را وارد نمایید"
                        // value = {password}
                        // onChange = {(e) => setPassword(e.target.value)}
                        // className={error.password && 'error-form'}
                    />
                    <span className='error-text'>
                        {/* {error.password} 
                        </span>
                </CForm.Group>
                 */}
                  <CButton
                    className="full-width submit-btn"
                    // onClick={loginUser}
                  >
                    تایید و ادامه
                    {/* <BsArCRowLeft /> */}
                  </CButton>
                  <CCol md={12} className="register">
                    {/* <Link href="/register">
                        <a>
                            ثبت نام کارجو
                        </a>
                    </Link> */}
                  </CCol>
                </CForm>
              </CCol>
              <CCol md={4} className="left" />
            </CRow>
          </main>
        </div>
      </CRow>
    </CCol>

    // <div className="c-app c-default-layout flex-row align-items-center">
    //   <CContainer>
    //     <CRow className="justify-content-center">
    //       <CCol md="8">
    //         <CCardGroup>
    //           <CCard className="p-4">
    //             <CCardBody>
    //               <CForm>
    //                 <p className="text-muted"> ورود به حساب کاربری </p>
    //                 <CRow>
    //                     <Input
    //                     type="text"
    //                       placeholder="شماره همراه"
    //                       name="userName"
    //                       aria-describedby="login-userName"
    //                       value={loginState.userName}
    //                       onRef={(ref) => {
    //                         userNameRef = ref;
    //                       }}
    //                       changeHandler={(value)=>{setLoginState({...loginState,userName:value.target.value})}}
    //                       hasIcon={true}
    //                       className="form-control"
    //                       inputContainerClassName="input-group mb-3"
    //                       iconClassName="input-group-prepend"
    //                       iconName="cilPhone"
    //                       iconId="login-userName"
    //                     />
    //                     <Input
    //                       type="password"
    //                       placeholder="رمز عبور"
    //                       name="password"
    //                       aria-describedby="login-password"
    //                       value={loginState.password}
    //                       onRef={(ref) => {
    //                         passWordRef = ref;
    //                       }}
    //                       changeHandler={(value)=>{setLoginState({...loginState,password:value.target.value})}}
    //                       hasIcon={true}
    //                       className="form-control"
    //                       inputContainerClassName="input-group mb-3"
    //                       iconClassName="input-group-prepend"
    //                       iconName="cil-lock-locked"
    //                       iconId="login-password"
    //                     />
    //                 </CRow>
    //                 <CRow>
    //                   <CCol xs="5">
    //                     <Button
    //                       color="primary"
    //                       className="px-4"
    //                       text="ورود"
    //                       handleClick={()=>onSubmit()}
    //                     />
    //                   </CCol>
    //                   <CCol xs="7" className="text-right">
    //                     <Button color="link" className="px-0" text="فراموشی رمز عبور"/>
    //                     /
    //                     <Button color="link" className="px-0" text="ثبت نام" />
    //                   </CCol>
    //                 </CRow>
    //               </CForm>
    //             </CCardBody>
    //           </CCard>
    //           <CCard
    //             className="text-white bg-primary py-5 d-md-down-none"
    //             style={{
    //               width: "44%",
    //             }}
    //           >
    //             <CCardBody className="text-center">
    //               <div>
    //                 <h2> ثبت نام </h2>
    //                 <p>
    //                   اگر بعنوان کارفرما یا کارجو اولین تجربه بازدیدتون از مودا جاب هست، به ما بپیوندید
    //                 </p>
    //                 <Link to="/admin/register">
    //                   <CButton
    //                     color="primary"
    //                     className="mt-3"
    //                     active
    //                     tabIndex={-1}
    //                   >
    //                     ثبت نام!
    //                   </CButton>
    //                 </Link>
    //               </div>
    //             </CCardBody>

    //           </CCard>
    //         </CCardGroup>
    //       </CCol>
    //     </CRow>
    //   </CContainer>
    // </div>
  );
};

export default Login;
