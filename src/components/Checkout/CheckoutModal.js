import React from "react";

function CheckoutModal(props) {
  if (!props.show) return null;

  return (
    <div className="modal" onClick={() => props.onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Galerija</h4>
        </div>
        <div className="modal-body">This is modal body</div>
        <div className="modal-footer">
          <button onClick={() => props.onClose()} className="modal-button">
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
