import React from "react";
import CreateAndUpdate from "../forms/CreateAndUpdate";
import firebase from "../config/firebase";

export default function Create({
  history,
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
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .add({
        name,
        price,
        unit,
        category,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .then(clearFormFields())
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
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
        unit={unit}
        setUnit={setUnit}
        handleForm={handleForm}
      />
    </div>
  );
}
