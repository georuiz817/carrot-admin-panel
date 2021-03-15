import React, { useState } from "react";
import { addProduct } from "../config/fireBaseFunctions";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function Create({ history }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [category, setCategory] = useState("vegetable");

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h1>Add Product</h1>
        <form
          className="auth-form"
          onSubmit={(e) =>
            addProduct(
              e,
              name,
              price,
              unit,
              category,
              history,
              setName,
              setPrice,
              setUnit,
              setCategory
            )
          }
        >
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
            className="signup-field"
            id="outlined-basic"
            placeholder="unit"
            variant="outlined"
            required
            value={unit}
            onChange={(e) => setUnit(e.target.value.toLowerCase())}
            name="product-name"
            helperText="price per: pound, ounce, gallon etc.."
          />
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
            <option value="meat and dairy">meat/dairy</option>
            <option value="other">other</option>
          </TextField>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
