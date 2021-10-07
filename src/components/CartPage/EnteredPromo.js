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
    <div>
      <div>
        {!promo.off5 && !promo.off20 && !promo.off20eur ? null : (
          <h2>Entered Promo Codes</h2>
        )}
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default EnteredPromo;
