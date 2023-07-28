import React from "react";
import modalLogo from "../../../assets/images/popupLogo.png";
import CloseBtn from "../../../assets/icons/closeButton.svg";
import { useNavigate } from "react-router";
import { ROUTES_PATH } from "../../../helpers/constants/constants.helper";
const Modal = ({ children, moadalClass = "w-full h-auto" }) => {
  //For homepage redirection
  const navigate = useNavigate();

  return (
    <>
      <div
        className="modal-wrapper fixed top-0 bottom-0 left-0 right-0  z-50 flex items-center justify-center bg-[rgba(0,0,0,0.1)]  transition-opacity duration-[250ms] ease-in-out"
        id="modal"
      >
        <div
          className={` max-mobile:max-w-[90%] max-w-[540px]  translate-y-0 transition-opacity duration-[250ms] ease-in-out transform rounded-[20px]  z-[1] h-auto max-h-[90%]  bg-white py-[20px] px-[22px] ${moadalClass}  `}
        >
          <div className="modal-header border-b-0 flex items-center justify-center ">
            <img src={modalLogo} className="h-auto w-[90px]" alt="Logo"  />
            <a
              href="#!"
              role="button"
              className="  flex items-center justify-center w-[35px] h-[35px]  border-none cursor-pointer absolute right-[37px] top-[23px] z-50"
              aria-label="close this modal"
            >
              <img
                src={CloseBtn}
                alt="close"
                className="h-full w-full"
                onClick={() => navigate(ROUTES_PATH.HOME)}
            
              />
            </a>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
