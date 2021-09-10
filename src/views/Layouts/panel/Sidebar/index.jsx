import React from "react";
import { useSelector } from "react-redux";
// import {
//   CCreateElement,
//   CSidebar,
//   CSidebarBrand,
//   CSidebarNav,
//   CSidebarNavDivider,
//   CSidebarNavTitle,
//   CSidebarMinimizer,
//   CSidebarNavDropdown,
//   CSidebarNavItem,
// } from "@coreui/react";

// import CIcon from "@coreui/icons-react";
// // sidebar nav config
// import navigation from "./_nav";

const Sidebar = (props) => {
  // const dispatch = useDispatch()
  const { sideBarShow } = useSelector((state) => ({
    sideBarShow: state && state.changeState,
  }));
  return (
    <div>
      test
    </div>
    // <CSidebar show={sideBarShow}>
    //   <CSidebarBrand className="d-md-down-none" to="/admin">
    //     <CIcon
    //       src={"../images/modajob/modajobAndIcon.svg"}
    //       className="c-sidebar-brand-full"
    //       height={40}
    //     />{" "}
    //     <CIcon
    //       className="c-sidebar-brand-minimized"
    //       src={"../images/modajob/modajobOnly.svg"}
    //       height={35}
    //     />{" "}
    //   </CSidebarBrand>{" "}
    //   <CSidebarNav>
    //     <CCreateElement
    //       items={navigation}
    //       components={{
    //         CSidebarNavDivider,
    //         CSidebarNavDropdown,
    //         CSidebarNavItem,
    //         CSidebarNavTitle,
    //       }}
    //     />{" "}
    //   </CSidebarNav>{" "}
    //   <CSidebarMinimizer className="c-d-md-down-none" />
    // </CSidebar>
  
  );
};
export default Sidebar;
// const mapStateToProps = state =>{
//   return {
//     sidebarShow : state.changeState
//   }
// }
// export default connect(mapStateToProps)(TheSidebar);
