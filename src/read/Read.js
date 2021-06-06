import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Products from "./Products";
import ReadBtns from "./ReadBtns";
import { grabProducts } from "../config/fireBaseFunctions";
import { checkForLow } from "../config/otherfunctions";
import { TextField } from "@material-ui/core";

const Read = ({ history }) => {
  const [products, setProducts] = useState("");
  const [search, setSearch] = useState("");
  const [sortByLow, setSortByLow] = useState("true");
  const searchArray = [...products];

  useEffect(() => {
    checkForLow(setSortByLow);
    grabProducts(setProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("LocalLow", JSON.stringify(sortByLow));
  });

  let filteredCategory = searchArray.filter((i) => {
    return i.name.indexOf(search) !== -1;
  });

  return (
    <div className="read">
      <div class="read-header">
        <h2>Hi, George!</h2>
        <p>What would you like to do today?</p>
      </div>
      <TextField
        id="outlined-size-small"
        variant="outlined"
        size="small"
        fullWidth
        placeholder="search by item"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <ReadBtns sortByLow={sortByLow} setSortByLow={setSortByLow} />
      <Categories />
      <Products
        sortByLow={sortByLow}
        filteredCategory={filteredCategory}
        products={products}
        history={history}
      />
    </div>
  );
};

export default Read;
