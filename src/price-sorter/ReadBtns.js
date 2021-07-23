import React from "react";
import { TextField } from "@material-ui/core";

export default function ReadBtns({ sortByLow, setSortByLow }) {
  return (
    <div className="add-and-sort">
      <div>
        <TextField
          size="small"z
          className="filter"
          id="outlined-select-currency-native"
          select
          required
          value={sortByLow}
          onChange={(e) => setSortByLow(e.target.value)}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option value="true">$ LOW - HIGH</option>
          <option value="false">$ HIGH - LOW</option>
        </TextField>
      </div>
    </div>
  );
}
