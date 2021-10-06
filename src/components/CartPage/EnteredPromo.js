import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removePromo5,
  removePromo20,
  removePromo20Eur,
} from "../../actions/promoActions";

function EnteredPromo() {
  const promo = useSelector((state) => state.promo);
  const dispatch = useDispatch();

  return (
    <>
      <p>Entered Promo Codes</p>
      {promo.off5 && (
        <>
          <p>5%OFF</p>
          <button onClick={() => dispatch(removePromo5())}>
            <i className="material-icons">clear</i>
          </button>
        </>
      )}
      {promo.off20 && (
        <>
          <p>20%OFF</p>
          <button onClick={() => dispatch(removePromo20())}>
            <i className="material-icons">clear</i>
          </button>
        </>
      )}
      {promo.off20eur && (
        <>
          <p>20EUROFF</p>
          <button onClick={() => dispatch(removePromo20Eur())}>
            <i className="material-icons">clear</i>
          </button>
        </>
      )}
    </>
  );
}

export default EnteredPromo;
