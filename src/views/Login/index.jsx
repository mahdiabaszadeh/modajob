/** @format */

import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../components/Infrastructure/Input/TextInput";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../components/Infrastructure/Button";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  postRequestToServer,
  getRequestToServer,
} from "../../utilities/appManager";
const Login = () => {
  const defaultValues = {
    phone: "",
    password: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    phone: yup
      .string()
      .required()
      .matches(phoneRegExp, "شماره همراه وارد شده صحیح نمی باشد"),
    password: yup.string().required().min(4).max(20),
  });

  const method = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = method;

  const submitHandler = (data) => {
    postRequestToServer(
      "api/userAccount/authenticate",
      { phone: "09150681916", password: "123456789" },
      () => {},
      (result) => {
        console.log(result);
      },
      (result) => {
        console.log(result);
      }
    );
  };

  return (
    <Col>
      <Row>
        <div className="col-md-10 offcet-center">
          <main className="col-md-6 offcet-center">
            {/* ----------- step one ------------ */}
            <Row className="container">
              <Col md={8} className="right">
                <p className="title">ورود به مداجاب</p>
                <p className="sub-title">
                  برای استفاده از خدمات مداجاب، وارد حساب کاربری خود شوید.
                </p>
                <FormProvider {...method}>
                  <Form
                    id="login"
                    name="Login-Form"
                    data-name="Login Form"
                    method="post"
                    ms-login="true"
                    onSubmit={handleSubmit(submitHandler)}
                  >
                    <TextInput
                      type="text"
                      name="phone"
                      id="phone"
                      labelText={null}
                      inputClassName={null}
                      placeholder="شماره همراه خود را وارد کنید"
                    />
                    <TextInput
                      type="password"
                      name="password"
                      id="password"
                      labelText={null}
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                    <Button
                      type="submit"
                      innerText="تایید و ادامه"
                      className="full-width submit-btn"
                      hasIcon={true}
                      iconElement={<BsArrowLeft />}
                    />
                    <Col md={12} className="register">
                      <Link to="/register">ثبت نام کارجو</Link>
                    </Col>
                  </Form>
                </FormProvider>
              </Col>
              <Col md={4} className="left" />
            </Row>
          </main>
        </div>
      </Row>
    </Col>
  );
};

export default Login;
