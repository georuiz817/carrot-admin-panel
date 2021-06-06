import React from "react";
import { deleteProducts } from "../config/fireBaseFunctions";
import { sortChecker } from "../config/otherfunctions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
export default function Products({
  history,
  products,
  filteredCategory,
  sortByLow,
}) {
  return (
    <div>
      <h2>Items</h2>
      <div class="add-btn">
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
        {products !== "" ? (
          sortChecker(filteredCategory, sortByLow).map((i) => (
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
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  );
}
