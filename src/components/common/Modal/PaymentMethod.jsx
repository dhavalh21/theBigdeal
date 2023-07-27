import React from "react";
import Modal from "./Modal";
import viausdt from "../../../assets/icons/crypto.svg";
import viacard from "../../../assets/icons/card.svg";

const PaymentMethod = ({ setVisible }) => {
  return (
    <div>
      <Modal moadalClass="w-[400px] h-[240px] ">
        <div className="modalWrapper  flex justify-center items-center flex-col ">
          <h3 className="modal-heading-1 my-6 text-black text-xl text-center ">
            <strong>Choose Your Payment Method</strong>
          </h3>
          <div className="payment-btn flex justify-center gap-[10px]  w-full">
            <button
              className="pay-btn border-none w-1/2 h-[4.1rem] bg-[whitesmoke] p-[18px]  rounded-[10px] flex justify-center items-center flex-col"
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <div>
                <img src={viausdt} alt="cryptop" />
              </div>
              Pay via USDT
            </button>
            <button
              className="pay-btn border-none shadow-sm bg-[whitesmoke] p-[18px]  rounded-[10px] flex justify-center items-center flex-col w-1/2 h-[4.1rem] "
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <div>
                <img src={viacard} alt="card" />
              </div>
              Pay via Card
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentMethod;
