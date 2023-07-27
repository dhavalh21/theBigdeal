import Modal from "./Modal";

const InsufficientBal = ({ setVisible }) => {
  return (
    <div>
      <Modal moadalClass="w-[500px] h-[315px]">
        <div className="modalWrapper  flex justify-center items-center flex-col ">
          <h3 className="text-black text-xl text-center mb-1 max-mobile:text-xl mt-[15px]">
            <strong>REGISTRATION AMOUNT: 100 PLAYS</strong>
          </h3>
          <p className="modal-para-1 text-center  text-sm text-gray max-mobile:text-sm mb-2">
            100 PLAYS will be deducted from your wallet balance
          </p>
          <h4 className="mt-[10px] text-red text-xl font-bold text-center  max-mobile:text-xl  mb-2">
            Insufficient Wallet Balance
          </h4>
          <button
            className=" bg-green modal-btn-1 mb-4  w-[213px] h-[60px] mt-3 text-white text-lg max-mobile:text-lg max-mobile:w-[220px] max-mobile:h-[60px] font-bold rounded-lg "
            style={{ outline: "none" }}
            onClick={() => setVisible(3)}
          >
            CONFIRM
          </button>
          <p className=" text-gray hover:text-red cursor-pointer text-sm text-center max-mobile:text-sm">
            Cancel
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default InsufficientBal;
