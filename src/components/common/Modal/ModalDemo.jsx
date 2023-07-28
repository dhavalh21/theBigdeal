import React, { useState } from "react";
import RegistrationConfirmModal from "./RegistrationConfirmModal"

import InsufficientBal from "./InsufficientBal";
import BuyPlays from "./BuyPlays";
import PaymentMethod from "./PaymentMethod";

function ModalDemo() {
  const [visible, setVisible] = useState(1);
  return (
    <div>
      <h1>Home</h1>
      {visible === 1 ? (
        <RegistrationConfirmModal setVisible={setVisible} />
      ) : null}
      {visible === 2 ? <InsufficientBal setVisible={setVisible} /> : null}
      {visible === 3 ? <BuyPlays setVisible={setVisible} /> : null}
      {visible === 4 ? <PaymentMethod setVisible={setVisible} /> : null}
    </div>
  );
}

export default ModalDemo;
