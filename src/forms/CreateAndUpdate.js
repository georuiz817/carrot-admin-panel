import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useLocation } from "react-router";

export default function CreateAndUpdate({
  handleForm,
  name,
  setName,
  price,
  setPrice,
  category,
  setCategory,
  oldName,
 oldPrice,
 oldCategory,
}) {
  const location = useLocation();
  return (
    <div className="auth-container">
      <h1>
        {location.pathname === "/create" ? "Add Product" : "Update Product"}
      </h1>
      <hr></hr>
      <form className="auth-form" onSubmit={(e) => handleForm(e)}>
        <TextField
          className="signup-field"
          id="outlined-basic"
          label="Product Name"
          placeholder={oldName}
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="product-name"
        />
        <TextField
          id="outlined-number"
          placeholder={oldPrice}
          label="Price "
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
  );
}
