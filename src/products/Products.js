import React from "react";
import { deleteProducts } from "../config/fireBaseFunctions";
import { sortChecker } from "../config/otherfunctions";
import ReadBtns from "../price-sorter/ReadBtns";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Products({
  history,
  products,
  filteredCategory,
  sortByLow,
  category,
  search,
  setSortByLow,
}) {
  const classes = useStyles();

  let mediaCard = (i) => {
    return (
      <Card id={i.id} key={i.id} className={classes.root}>
        <CardActionArea>
          <CardContent className="card-emoji">{i.icon}</CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {i.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {i.category}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ${i.price} per {i.unit}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions class={i.category}>
          <Button
            onClick={() => {
              deleteProducts(i.id);
            }}
            size="small"
            color="primary"
          >
            <FontAwesomeIcon className="card-icon" icon={faTrash} />
          </Button>
          <Button
            onClick={() => {
              history.push(
                `/update/${i.id}/${i.name}/${i.price}/${i.unit}/${i.category}/${i.icon}/${i.creator}`
              );
            }}
            size="small"
            color="primary"
          >
            <FontAwesomeIcon className="card-icon" icon={faEdit} />
          </Button>
        </CardActions>
      </Card>
    );
  };

  let showProducts = (category) => {
    return !category
      ? sortChecker(filteredCategory, sortByLow).map((i) => mediaCard(i))
      : sortChecker(filteredCategory, sortByLow)
          .filter((i) => i.category === category)
          .map((i) => mediaCard(i));
  };

  let checkIfProductsAvaiable = (products, category) => {
    return products.length > 0 ? (
      showProducts(category)
    ) : (
      <h2>You currently have no products</h2>
    );
  };

  return (
    <div>
      <h2>Items</h2>

      <div className="price-filter">
        <ReadBtns sortByLow={sortByLow} setSortByLow={setSortByLow} />
      </div>
      <div className="products">
        {products !== "" ? (
          checkIfProductsAvaiable(products, category)
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  );
}
