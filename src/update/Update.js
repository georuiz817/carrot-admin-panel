import React, { useState } from "react";
import CreateAndUpdate from "../forms/CreateAndUpdate";
import firebase from "../config/firebase";

export default function Update() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("vegetable");

  let handleForm = () => {
    console.log("i think update is working");
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
      />
    </div>
  );
}
