import {
  ACTION_CONSTANTS,
  CART_CONSTANTS,
  FORM_CONSTANTS,
  LANG_CONSTANTS,
} from "../actionTypes";

import { CONSTANTS } from "../../utils";

const initState = {
  // POPUP
  setOpen: false,
  dialog: {
    type: CONSTANTS.DIALOG.TYPE.MODAL.TERMS,
    category: CONSTANTS.DIALOG.CATEGORY.MODAL,
  },
  // MODAL
  setModel: false,
  onCloseHandler: null,
  onCancelHandlder: null,
  onSuccessHandler: null,
  modal: {
    title: "",
    content: "",
    cancelBtn: "",
    successBtn: "",
    cancelBtnId: "",
    successBtnId: "",
  },
  //Default Language
  openLangPopup: false,
  locale_updated: false,
  //Cart popup
  showCartMenu: false,
  showCartReview: false,
  orderStatus: CONSTANTS.ORDER_STATUS.INITIATED,
  networkAvailable: true
};

const actionReducer = (state = initState, action) => {
  switch (action.type) {
    case FORM_CONSTANTS.NO_INTERNET_CONNECTION:
      return {
        ...state,
        networkAvailable: action.state,
      };
    case ACTION_CONSTANTS.TERMS_OPEN:
      return {
        ...state,
        setOpen: true,
        dialog: {
          type: action.response?.type,
          category: action.response?.category,
        },
      };
    case ACTION_CONSTANTS.TERMS_CLOSE:
      return { ...state, setOpen: false };
    case ACTION_CONSTANTS.MODAL_OPEN:
      return {
        ...state,
        setModel: true,
        onCloseHandler: action.onClose,
        onCancelHandlder: action.onCancel,
        onSuccessHandler: action.onSuccess,
        modal: action.modal,
      };
    case ACTION_CONSTANTS.MODAL_REOPEN:
      return { ...state, setModel: false };
    case ACTION_CONSTANTS.MODAL_CLOSE:
      return { ...state, setModel: false };
    case LANG_CONSTANTS.LANGUAGE_POPUP_OPEN:
      return {
        ...state,
        openLangPopup: true,
      };
    case LANG_CONSTANTS.LANGUAGE_POPUP_CLOSE:
      return { ...state, openLangPopup: false, locale_updated: false };
    case LANG_CONSTANTS.UPDATE_LANGUAGE_LOCALE:
      return { ...state, locale_updated: true };
      
    case CART_CONSTANTS.CART_REVIEW_OPEN_REQUEST:
      return { ...state, showCartReview: !state?.showCartReview, showCartMenu:false, setOpen: false };
    case CART_CONSTANTS.CART_MENU_OPEN_REQUEST:
      return { ...state, showCartMenu: !state?.showCartMenu, setOpen: false };
    case CART_CONSTANTS.GET_CART_DETAILS_REQUEST:
      return { ...state, showCartMenu: false, setOpen: false };
    
    case ACTION_CONSTANTS.ORDER_EXPIRED:
      return {
        ...state,
        orderStatus: CONSTANTS.ORDER_STATUS.EXPIRED,
        setOpen: true,
        dialog: {
          type: CONSTANTS.DIALOG.TYPE.POPUP.ORDER_EXPIRED,
          category: CONSTANTS.DIALOG.CATEGORY.POPUP,
        },
        // setOpen: true,
        // popupType: CONSTANTS.POPUP_TYPE.ORDER_EXPIRED
      };
    default:
      return state;
  }
};
export default actionReducer;
