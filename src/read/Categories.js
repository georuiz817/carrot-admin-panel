import React from "react";

export default function Categories() {
  return (
    <div class="read-categories">
      <h2>Categories</h2>
      <div class="read-categories-btns">
        <div class="vegetable read-categories-btn grow">
          <span>🥦</span>
          <span>Veg</span>
        </div>
        <div class="fruit read-categories-btn grow">
          <span>🍋</span>
          <span>Fruit</span>
        </div>
        <div class="meat read-categories-btn grow">
          <span>🥛</span>
          <span>Meat</span>
        </div>
        <div class="other read-categories-btn grow">
          <span>🥫</span>
          <span>Other</span>
        </div>
      </div>
    </div>
  );
}
