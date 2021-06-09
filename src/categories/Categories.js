import React from "react";

export default function Categories({ setCategory }) {
  return (
    <div className="read-categories">
      <h2>Categories</h2>
      <div className="read-categories-btns">
        <div onClick={() => setCategory('vegetable')} className="vegetable read-categories-btn grow">
          <span>🥦</span>
          <span>Veg</span>
        </div>
        <div  onClick={() => setCategory('fruit')} className="fruit read-categories-btn grow">
          <span>🍋</span>
          <span>Fruit</span>
        </div>
        <div  onClick={() => setCategory('meat')} className="meat read-categories-btn grow">
          <span>🥛</span>
          <span>Meat</span>
        </div>
        <div  onClick={() => setCategory('other')} className="other read-categories-btn grow">
          <span>🥫</span>
          <span>Other</span>
        </div>
      </div>
    </div>
  );
}
