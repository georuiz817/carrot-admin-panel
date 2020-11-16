import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";
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
  const searchArray = [...products];

  useEffect(() => {
    grabProducts();
  }, []);

  async function grabProducts() {
    await firebase
      .firestore()
      .collection("/products")
      .get()
      .then((querySnapshot) => {
        const prodcutsWithID = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(prodcutsWithID);
      });
  }

  let filteredCategory = searchArray.filter((i) => {
    return i.name.indexOf(search) !== -1;
  });

  async function deleteProducts(id) {
    await firebase
      .firestore()
      .collection("/products")
      .doc(`${id}`)
      .delete()
      .then(function () {
        document.getElementById(`${id}`).remove();
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  }

  return (
    <div className="read">
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
          filteredCategory.map((i) => (
            <Card className="card" id={i.id} key={i.id} variant="outlined">
              <CardContent className="card-title">
                Name: {i.name.toLowerCase()}
              </CardContent>
              <CardContent>
                Price: ${i.price} per {i.unit}
              </CardContent>
              <CardContent>Category: {i.category}</CardContent>
              <FontAwesomeIcon
                className="delete-icon"
                onClick={() => {
                  deleteProducts(i.id);
                }}
                icon={faTrash}
              />
              <FontAwesomeIcon
                onClick={() => {
                  history.push(
                    `/update/${i.id}/${i.name}/${i.price}/${i.unit}/${i.category}`
                  );
                }}
                className="delete-icon"
                icon={faEdit}
              />
            </Card>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Read;
