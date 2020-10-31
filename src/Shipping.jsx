import React from "react";
import "./styles.css";
export default function Shipping() {
  return (
    <div className="App">
      <div className="input">
        Name*:
        <input type="text" name="name" />
      </div>
      <div className="input">
        Adress*:
        <input type="text" name="name" />
      </div>
      <div className="input">
        Phone:
        <input type="text" name="name" />
      </div>
      <div className="input">
        E-mail:
        <input type="text" name="name" />
      </div>
      <div>
        Shiping-option:
        <select>
          <option selected value="Free shipping">
            Free shipping
          </option>
          <option value=">Express shipping">
            Express shipping- additional 9.99 €
          </option>
          <option value="Courier shippin">
            Courier shipping - additional 19.99 €
          </option>
        </select>
      </div>
      <div className="button">
        <button>Pay</button>
      </div>
    </div>
  );
}
