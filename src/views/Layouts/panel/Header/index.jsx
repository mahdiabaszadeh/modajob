import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CLink,
  CHeader,
  CToggler,
  CHeaderNav,
  CSubheader,
  CHeaderNavItem,
  CHeaderNavLink,
  CBreadcrumbRouter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Dropdown from "./dropdown";
import DropdownMssg from "./dropdownMssg";
import DropdownTasks from "./dropdownTasks";
import DropdownNotif from "./dropdownNotif";

// routes config
// import routes from '../../routers/index'
import routes from '../../../../router';

// import { updateShowFilter } from "src/stories/action/changeStateAction";

const Header = (props) => {
  const dispatch = useDispatch();
  const { sideBarShow } = useSelector((state) => ({
    sideBarShow: state && state.changeState,
  }));

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sideBarShow)
      ? false
      : "responsive";
    // dispatch(updateShowFilter(val));
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sideBarShow)
      ? true
      : "responsive";

    // dispatch(updateShowFilter(val));
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/a/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/a/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <Dropdown />
        <DropdownMssg />
        <DropdownNotif />
        <DropdownTasks />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        {/*Reza-Header-Rout-Address*/}
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/a/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />
            &nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Settings
          </CLink>
        </div>
      </CSubheader>
    </CHeader>
  );
};
// const mapStateToProps = state =>{
//   return {
//     sideBarShow : state.changeState
//   }
// }
// export default connect(mapStateToProps)(TheHeader);
// const { sideBarShow } = useSelector((state) => ({
//   sideBarShow: state && state.changeState,
// }));
export default Header;
