import React, { useState } from "react";
import { updateProduct } from "../config/fireBaseFunctions";
import { useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function Update({ history }) {
  let { id, oldName, oldPrice, oldUnit, oldCategory, oldIcon } = useParams();
  const [icon, setIcon] = useState(oldIcon);
  const [name, setName] = useState(oldName);
  const [price, setPrice] = useState(oldPrice);
  const [unit, setUnit] = useState(oldUnit);
  const [category, setCategory] = useState(oldCategory);
  const [loading, setLoading] = useState(false);

  return !loading ? (
    <div className="auth-body">
      <h1>Update Product</h1>
      <form
        className="auth-form"
        onSubmit={(e) =>
          updateProduct(
            e,
            setLoading,
            id,
            icon,
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
          placeholder={oldIcon}
          variant="outlined"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          name="icon"
        />
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
          <option value="meat">meat</option>
          <option value="other">other</option>
        </TextField>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <div>
      <p>loading</p>
    </div>
  );
}
