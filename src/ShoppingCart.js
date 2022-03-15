import { useState, useMemo, useRef } from "react";

function ShoppingCart() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [carts, setCarts] = useState([]);

  const inputNameRef = useRef();

  const handleAddCart = () => {
    setCarts([
      ...carts,
      {
        name,
        price: Number(price),
      },
    ]);
    setName("");
    setPrice("");
    inputNameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = carts.reduce((total, item) => {
      console.log("tinh toan");
      return total + item.price;
    }, 0);
    return result;
  }, [carts]);

  return (
    <>
      <div>
        <input
          ref={inputNameRef}
          value={name}
          placeholder="Enter Name ..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <input
          value={price}
          placeholder="Price ..."
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleAddCart}>Add</button>
      <p>total: {total}</p>
      <ul>
        {carts.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
