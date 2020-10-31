import React, { useRef } from "react";
export function Cart({ cart, onDelete }) {
  const inputRef = useRef();

  function stepDown() {
    inputRef.current.stepDown();
  }

  function stepUp() {
    inputRef.current.stepUp();
  }
  return (
    <div class="content">
      <li class="listyle">
        <h2>{cart.createdAt}</h2>
        <div class="q">
          <img
            src={cart.avatar}
            alt="product"
            style={{
              float: "left",
              margin: "0 10px 0 50px"
            }}
          />
          <p
            style={{
              marginLeft: "10px",
              width: "300px",
              textAlign: "left"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            voluptate mollitia accusamus, consectetur qui sint vitae. Ad veniam
            laboriosam sunt?
          </p>

          <button type="button" onClick={stepDown}>
            -
          </button>
          <input
            ref={inputRef}
            type="number"
            min="0"
            max="50"
            value={cart.Number}
            readonly
            class="raz"
          />
          <button type="button" onClick={stepUp}>
            +
          </button>
          <button type="button" onClick={() => onDelete(cart.id)}>
            Delete
          </button>
        </div>
      </li>
    </div>
  );
}
