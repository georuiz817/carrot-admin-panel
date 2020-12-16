import React, { useState } from "react";
import CreateAndUpdate from "../forms/CreateAndUpdate";
import firebase from "../config/firebase";
import { useParams } from "react-router-dom";

export default function Update({ history }) {
  let { id, oldName, oldPrice, oldCategory, oldUnit } = useParams();
  const [name, setName] = useState(oldName);
  const [price, setPrice] = useState(oldPrice);
  const [unit, setUnit] = useState(oldUnit);
  const [category, setCategory] = useState(oldCategory);
  const [loading, setLoading] = useState(false);

  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await firebase.firestore().collection("products").doc(`${id}`).update(
        {
          name,
          price,
          unit,
          category,
        },
        setLoading(false)
      );
    } finally {
      history.push("/");
    }
  }

  return !loading ? (
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
  ) : (
    <div>
      <p>loading</p>
    </div>
  );
}
