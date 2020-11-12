import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
const Read = ({ history, loggedIn }) => {
  const [products, setProducts] = useState(null);
  //const [sortLow, setSortLow] = useState(true);

  useEffect(() => {
    grabProducts();
  }, []);

  console.log(products);
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
      <div className="products">
        {products !== null ? (
          products.map((i) => (
            <Card className="card" id={i.id} key={i.id} variant="outlined">
              <CardContent className="card-title">
                Name: {i.name.charAt(0).toUpperCase() + i.name.slice(1)}
              </CardContent>
              <CardContent>Price: ${i.price}</CardContent>
              <CardContent>
                Category:{" "}
                {i.category.charAt(0).toUpperCase() + i.category.slice(1)}
              </CardContent>
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
                    `/update/${i.id}/${i.name}/${i.price}/${i.category}`
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
