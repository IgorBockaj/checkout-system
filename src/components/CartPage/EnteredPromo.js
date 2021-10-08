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
    <div className="active-promos">
      {!promo.off5 && !promo.off20 && !promo.off20eur ? null : (
        <h2>Active Promo Codes</h2>
      )}

      <div className="promo-line">
        {promo.off5 && (
          <div>
            <p>5%OFF</p>
            <button onClick={() => dispatch(removePromo5())}>
              <i className="material-icons">clear</i>
            </button>
          </div>
        )}
        {promo.off20 && (
          <div>
            <p>20%OFF</p>
            <button onClick={() => dispatch(removePromo20())}>
              <i className="material-icons">clear</i>
            </button>
          </div>
        )}
        {promo.off20eur && (
          <div>
            <p>20EUROFF</p>
            <button onClick={() => dispatch(removePromo20Eur())}>
              <i className="material-icons">clear</i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnteredPromo;
