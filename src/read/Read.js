import React, { useState, useEffect } from "react";
import Categories from "../categories/Categories";
import Products from "../products/Products";
import { grabProducts } from "../config/fireBaseFunctions";
import { checkForLow } from "../config/otherfunctions";
import { TextField } from "@material-ui/core";
import { filterInput } from "../config/otherfunctions";
import { Button } from "@material-ui/core";
import firebase from "../config/firebase";

const Read = ({ history }) => {
  const [products, setProducts] = useState("");
  const [search, setSearch] = useState("");
  const [sortByLow, setSortByLow] = useState("true");
  const [category, setCategory] = useState(false);
  const searchArray = [...products];

  useEffect(() => {
    checkForLow(setSortByLow);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        grabProducts(setProducts);
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("LocalLow", JSON.stringify(sortByLow));
  });

  return (
    <div className="read">
      <div className="read-header">
        <h2>
          Hello{" "}
          {firebase.auth().currentUser ? (
            firebase.auth().currentUser.displayName
          ) : (
            <span></span>
          )}
          !
        </h2>
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
        onClick={() => setCategory("")}
      />
      <div className="add-btn">
        <Button
          onClick={() => {
            history.push("/create");
          }}
          className="add-btn"
          variant="outlined"
          type="submit"
        >
          Add Product
        </Button>
      </div>
      <Categories category={category} setCategory={setCategory} />
      <Products
        sortByLow={sortByLow}
        filterInput={filterInput}
        products={products}
        history={history}
        category={category}
        search={search}
        setSortByLow={setSortByLow}
        searchArray={searchArray}
      />
    </div>
  );
};

export default Read;
