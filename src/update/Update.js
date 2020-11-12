import React from "react";
import CreateAndUpdate from "../forms/CreateAndUpdate";
import firebase from "../config/firebase";
import { useParams } from "react-router-dom";

export default function Update({
  name,
  setName,
  price,
  setPrice,
  category,
  setCategory,
  clearFormFields,
}) {
  let { id, oldName, oldPrice, oldCategory } = useParams();

  let handleForm = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .doc(`${id}`)
      .update({
        name,
        price,
        category,
      })
      .then(clearFormFields());
  };

  return (
    <div className="auth-body">
      <CreateAndUpdate
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        category={category}
        setCategory={setCategory}
        handleForm={handleForm}
        oldName={oldName}
        oldPrice={oldPrice}
        oldCategory={oldCategory}
      />
    </div>
  );
}
