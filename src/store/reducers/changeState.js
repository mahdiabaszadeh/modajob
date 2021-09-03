// import {CHANGE_STATE_ACTION} from './../action/changeStateAction'
import {CHANGE_STATE_ACTION} from '../actions/changeStateAction'

let sidebarShow = 'responsive';
export const changeState = (state = sidebarShow, action) => {
  let {type ,payload } = action;
  switch (type) {
    case CHANGE_STATE_ACTION:
      sidebarShow = payload;
      return sidebarShow;
    default:
      return state
  }
}
