import {
    DESKTOP_DEVICE,
    MOBILE_DEVICE,
    TABLET_DEVICE,
  } from "../constants/general";

/**
 * @description use this to get the device of current device.
 * @returns {string} device type ( MOBILE_DEVICE, TABLET_DEVICE, DESKTOP_DEVICE)
 */
 export const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return TABLET_DEVICE;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return MOBILE_DEVICE;
    }
    return DESKTOP_DEVICE;
  };