import { useState } from "react";

// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
export default function Item({ item: { name, price } }) {
  const [ isInCart, setIsInCart ] = useState(false);
  function toggleCart() {
    //toggles a state that manages whether or not the item is in the cart
    setIsInCart(!isInCart);
  }
  // let buttonText;
  // if (isInCart) {
  //   buttonText = "Remove from cart";
  // } else {
  //   buttonText = "Add to cart";
  // }
  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p>
        <button onClick={toggleCart}>
          {/* the value of the event is a function that runs */}
          <strong>{isInCart ? "Remove from Cart" : "Add to Cart"}</strong>
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{isInCart ? "In cart" : "Not in Cart"}</span>
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}