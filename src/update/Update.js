import React, { useState } from "react";
import { updateProduct } from "../config/fireBaseFunctions";
import { useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function Update({ history }) {
  let { id, oldName, oldPrice, oldCategory, oldUnit } = useParams();
  const [name, setName] = useState(oldName);
  const [price, setPrice] = useState(oldPrice);
  const [unit, setUnit] = useState(oldUnit);
  const [category, setCategory] = useState(oldCategory);
  const [loading, setLoading] = useState(false);

  return !loading ? (
    <div className="auth-body">
      <div className="auth-container">
        <h1>Update Product</h1>
        <form
          className="auth-form"
          onSubmit={(e) =>
            updateProduct(
              e,
              setLoading,
              id,
              name,
              price,
              unit,
              category,
              history
            )
          }
        >
          <TextField
            className="signup-field"
            id="outlined-basic"
            placeholder={oldName}
            variant="outlined"
            required
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
            name="product-name"
          />
          <TextField
            id="outlined-number"
            placeholder={oldPrice}
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
            placeholder={oldUnit}
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
            placeholder={oldCategory}
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
  ) : (
    <div>
      <p>loading</p>
    </div>
  );
}
