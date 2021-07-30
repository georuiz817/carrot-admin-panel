import React, { useState, useEffect } from "react";
import { addProduct } from "../config/fireBaseFunctions";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import firebase from "../config/firebase";
export default function Create({ history }) {
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("item");
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("vegetable");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCreator(firebase.auth().currentUser.uid);
      }
    });
  }, []);

  return (
    <div className="auth-body">
      <h1>Add Product</h1>
      <form
        className="auth-form"
        onSubmit={(e) =>
          addProduct(
            e,
            icon,
            name,
            price,
            unit,
            category,
            creator,
            history,
            setName,
            setPrice,
            setUnit,
            setCategory,
            setCreator
          )
        }
      >
        <TextField
          className="signup-field"
          id="outlined-basic"
          placeholder="icon"
          variant="outlined"
          required
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          name="icon"
        />
        <TextField
          className="signup-field"
          id="outlined-basic"
          placeholder="name"
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value.toLowerCase())}
          name="product-name"
        />
        <TextField
          id="outlined-number"
          placeholder="price"
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency-native"
          className="signup-field"
          select
          placeholder="unit"
          variant="outlined"
          required
          label="Unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          name="product-name"
          helperText="price per: pound, ounce, gallon etc.."
          SelectProps={{
            native: true,
          }}
        >
          <option value="item">item</option>
          <option value="pound">pound</option>
          <option value="pint">pint</option>
          <option value="gallon">gallon</option>
          <option value="liter">liter</option>
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option value="vegetable">vegetable</option>
          <option value="fruit">fruit</option>
          <option value="meat">meat</option>
          <option value="other">other</option>
        </TextField>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
