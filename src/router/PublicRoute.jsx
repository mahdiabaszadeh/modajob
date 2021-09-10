/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
import DefaultLayout from "../views/Layouts/Default";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <DefaultLayout fullwidth={true}>
      <Route {...rest} component={(props) => <Component {...props} />} />
    </DefaultLayout>
  );
};

PublicRoute.propTypes = {};

export default PublicRoute;
