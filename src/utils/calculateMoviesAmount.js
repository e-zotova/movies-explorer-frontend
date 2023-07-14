import {
  DESKTOP_WIDTH,
  DESKTOP_AMOUNT,
  TABLET_WIDTH,
  TABLET_AMOUNT,
  MOBILE_WIDTH,
  MOBILE_AMOUNT,
  DESKTOP_MORE,
  TABLET_MORE,
} from "./constants.js";

const screenWidth = window.innerWidth;

export function calculateInitialAmount() {
  if (screenWidth >= DESKTOP_WIDTH) {
    return DESKTOP_AMOUNT;
  } else if (screenWidth > MOBILE_WIDTH) {
    return TABLET_AMOUNT;
  } else if (screenWidth <= MOBILE_WIDTH) {
    return MOBILE_AMOUNT;
  }
}

export function calculateMoreAmount() {
  if (screenWidth >= DESKTOP_WIDTH) {
    return DESKTOP_MORE;
  } else if (screenWidth <= TABLET_WIDTH) {
    return TABLET_MORE;
  }
}
