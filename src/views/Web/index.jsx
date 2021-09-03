/** @format */

import React from "react";
import DefaultLayout from "../Layouts/Default";
import Main from "./Main";
const HomePage = (props) => {
  const { children } = props;
  return (
    <>
      <DefaultLayout fullwidth={true}>
          <Main />
      </DefaultLayout>
    </>
  );
};
export default HomePage;
