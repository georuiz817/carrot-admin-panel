import React from "react";
import { deleteProducts } from "../config/fireBaseFunctions";
import { sortChecker } from "../config/otherfunctions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//import { categoryFilter } from "../config/otherfunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
export default function Products({
  history,
  products,
  filteredCategory,
  sortByLow,
  category,
}) {
  let card = (i) => {
    return (
      <Card
        className="card grow card-grid"
        id={i.id}
        key={i.id}
        variant="outlined"
      >
        <CardContent className="card-title">
          <h1 className={`card-emoji ${i.category}`}>{i.icon}</h1>
        </CardContent>
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
    );
  };

  let showProducts = (category) => {
    return products && !category
      ? sortChecker(filteredCategory, sortByLow).map((i) => card(i))
      : sortChecker(filteredCategory, sortByLow)
          .filter((i) => i.category === category)
          .map((i) => card(i));
  };

  return (
    <div>
      <h2>Items</h2>
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
      <div className="products">
        {products !== "" ? showProducts(category) : <h1>loading...</h1>}
      </div>
    </div>
  );
}
