import React, { useState, useEffect } from "react";
import { deleteProducts } from "../config/fireBaseFunctions";
import { grabProducts } from "../config/fireBaseFunctions";
import { sortChecker } from "../config/otherfunctions";
import { checkForLow } from "../config/otherfunctions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
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
      <div className="add-and-filter">
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
        <TextField
          size="small"
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
      <TextField
        id="outlined-size-small"
        variant="outlined"
        size="small"
        placeholder="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="products">
        {products !== "" ? (
          sortChecker(filteredCategory, sortByLow).map((i) => (
            <Card
              className="card grow card-grid"
              id={i.id}
              key={i.id}
              variant="outlined"
            >
              <div>
                <CardContent className="card-title">
                  <h1 class='card-emoji'>{i.icon}</h1>
                </CardContent>
              </div>
              <div>
                <h3>{i.name.toLowerCase()}</h3>
                <p> {i.category} </p>
                <p>
                  ${i.price} per {i.unit}
                </p>

                <FontAwesomeIcon
                  className="card-icon"
                  onClick={() => {
                    deleteProducts(i.id);
                  }}
                  icon={faTrash}
                />
                <FontAwesomeIcon
                  onClick={() => {
                    history.push(
                      `/update/${i.id}/${i.name}/${i.price}/${i.unit}/${i.category}/${i.icon}`
                    );
                  }}
                  className="card-icon"
                  icon={faEdit}
                />
              </div>
            </Card>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Read;
