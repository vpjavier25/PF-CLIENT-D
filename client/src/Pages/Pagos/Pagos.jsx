import style from "./Pagos.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { linkPaymentPlatform } from "../../Redux/Slicers/paymentSlicer";

export default function Pagos() {
  const dispatch = useDispatch();
  const payLink = useSelector((state) => state.paymentLink.payLink);

  const handleButtonClick = () => {
    if (payLink) {
      window.open(payLink, "_blank");
    } else {
      dispatch(linkPaymentPlatform());
    }
  };

  return (
    <div className={style.container}>
      <div className={style.column}>
        <button onClick={handleButtonClick} className={style.button}>
          Realizar donacion
        </button>
      </div>
    </div>
  );
}