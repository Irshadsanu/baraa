import React from "react";
import "./History.css";
import { assets } from "../../Assets/Assets";

function History() {
  return (
    <div className="history">
      <div className="history-img">
        <img src={assets.History} alt="" />
      </div>
      <div className="history-text">
        <h6>OUR HISTORY</h6>
        <p>
          Baraa has a three decades legacy and has proven to be resilient and
          adaptable when faced with difficulties. Our path has been
          characterized by constant learning and development, leading to a
          thorough comprehension of the prospects given by Saudi Arabia's
          forward-thinking vision. We are ready and able to take advantage of
          these opportunities in order to help our clients succeed now.
        </p>
      </div>
    </div>
  );
}

export default History;
