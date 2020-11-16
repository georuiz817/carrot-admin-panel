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
  unit,
  setUnit,
  clearFormFields,
}) {
  let { id, oldName, oldPrice, oldCategory, oldUnit } = useParams();

  let handleForm = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .doc(`${id}`)
      .update({
        name,
        price,
        unit,
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
        oldUnit={oldUnit}
        unit={unit}
        setUnit={setUnit}
        oldCategory={oldCategory}
      />
    </div>
  );
}
