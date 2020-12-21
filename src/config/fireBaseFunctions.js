import firebase from "../config/firebase";

//ADD PRODUCT
export const addProduct = (
  e,
  name,
  price,
  unit,
  category,
  history,
  setName,
  setPrice,
  setUnit,
  setCategory
) => {
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
    .then(
      setName(""),
      setPrice(""),
      setUnit(""),
      setCategory("Vegetable"),
      history.push("/")
    )
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

//UPDATE PRODUCT
export const updateProduct = async (
  e,
  setLoading,
  id,
  name,
  price,
  unit,
  category,
  history
) => {
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
};

//DELETE PRODUCT
export const deleteProducts = async (id) => {
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
};

//GRABS PRODUCTS
export const grabProducts = async (setProducts) => {
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
};

//LOGIN
export const logInWithFireBase = (
  e,
  password,
  email,
  Auth,
  setErrors,
  error,
  history
) => {
  e.preventDefault();
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user) Auth.setLoggedIn(true);
          history.push("/");
          window.scrollTo(0, 0);
        })
        .catch((e) => {
          setErrors(e.message);
          console.log({ error });
        });
    });
};

//SIGNUP
export const signUpWithFireBase = (
  e,
  password,
  email,
  Auth,
  setErrors,
  error,
  history
) => {
  e.preventDefault();
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          history.push("/");
          if (res.user) Auth.setLoggedIn(true);
          window.scrollTo(0, 0);
        })
        .catch((e) => {
          console.log({ error });
        });
    });
};
