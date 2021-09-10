import React from 'react'
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Img
} from 'react-bootstrap'
import CIcon from '@coreui/icons-react'

const Dropdown = () => {
  return (
    <Dropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <DropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <Img
            src={'../avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </DropdownToggle>
      <DropdownMenu className="pt-0" placement="bottom-end">
        <DropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </DropdownItem>
        <DropdownItem>
          <CIcon name="cil-bell" className="mfe-2" /> 
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </DropdownItem>
        <DropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" /> 
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </DropdownItem>
        <DropdownItem>
          <CIcon name="cil-task" className="mfe-2" /> 
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </DropdownItem>
        <DropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" /> 
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </DropdownItem>
        <DropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </DropdownItem>
        <DropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </DropdownItem>
        <DropdownItem>
          <CIcon name="cil-settings" className="mfe-2" /> 
          Settings
        </DropdownItem>
        <DropdownItem>
          {/* <Icon name="cil-credit-card" className="mfe-2" />  */}
          Payments
          <Badge color="secondary" className="mfs-auto">42</Badge>
        </DropdownItem>
        <DropdownItem>
          <Icon name="cil-file" className="mfe-2" /> 
          Projects
          <Badge color="primary" className="mfs-auto">42</Badge>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          {/* <CIcon name="cil-lock-locked" className="mfe-2" />  */}
          Lock Account
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Dropdown
