import React, { useState, useEffect } from "react";
import "./styles.css";
import { Cart } from "./Cart";
export default function App() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      let res = await fetch(
        "https://5f90137de0559c0016ad5ffa.mockapi.io/gd/ewrrwe"
      );
      let content = await res.json();

      setContent(content);
    }
    fetchContent();
  }, []);
  function onDelete(cartId) {
    const contentNew = [...content];
    const index = contentNew.findIndex(({ id }) => id === cartId);
    contentNew.splice(index, 1);
    setContent(contentNew);
  }
  return content.map((cart) => (
    <Cart key={cart.id} cart={cart} onDelete={onDelete} />
  ));
}
