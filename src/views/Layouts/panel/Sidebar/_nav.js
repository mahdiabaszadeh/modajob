import React from "react";
// import CIcon from "@coreui/icons-react";

const menu = [
  {
    _tag: "CSidebarNavItem",
    name: "داشبورد",
    to: "/admin/dashboard",
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "جدید",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["زمینه ها"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "رنگ ها",
    to: "/admin/theme/colors",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "تایپوگرافی",
    to: "/a/theme/typography",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["کامپوننت ها"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "پایه",
    route: "/a/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "بردکرامب",
        to: "/a/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "کارت ها",
        to: "/a/base/cards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "کروسل",
        to: "/a/base/carousels",
      },
      {
        _tag: "CSidebarNavItem",
        name: "ستون بندی ها",
        to: "/a/base/collapses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "فرم ها",
        to: "/a/base/forms",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Jumbotron",
        to: "/a/base/jumbotrons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List group",
        to: "/a/base/list-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navs",
        to: "/a/base/navs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navbars",
        to: "/a/base/navbars",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pagination",
        to: "/a/base/paginations",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Popovers",
        to: "/a/base/popovers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Progress",
        to: "/a/base/progress-bar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Switches",
        to: "/a/base/switches",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tables",
        to: "/a/base/tables",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tabs",
        to: "/a/base/tabs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tooltips",
        to: "/a/base/tooltips",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Buttons",
    route: "/a/buttons",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Buttons",
        to: "/a/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Brand buttons",
        to: "/a/buttons/brand-buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Buttons groups",
        to: "/a/buttons/button-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dropdowns",
        to: "/a/buttons/button-dropdowns",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/a/charts",
    icon: "cil-chart-pie",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Icons",
    route: "/a/icons",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Free",
        to: "/a/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Flags",
        to: "/a/icons/flags",
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Brands",
        to: "/a/icons/brands",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Notifications",
    route: "/a/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Alerts",
        to: "/a/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Badges",
        to: "/a/notifications/badges",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Modal",
        to: "/a/notifications/modals",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Toaster",
        to: "/a/notifications/toaster",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Widgets",
    to: "/a/widgets",
    icon: "cil-calculator",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/a/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Disabled",
    icon: "cil-ban",
    badge: {
      color: "secondary",
      text: "NEW",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Labels"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label danger",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-danger",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label info",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-info",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label warning",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-warning",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default menu;
