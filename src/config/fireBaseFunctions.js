import firebase from "../config/firebase";

//ADD PRODUCT
export const addProduct = (
  e,
  icon,
  name,
  price,
  unit,
  category,
  creator,
  history,
  setName,
  setPrice,
  setUnit,
  setCategory,
  setCreator
) => {
  e.preventDefault();
  firebase
    .firestore()
    .collection("products")
    .add({
      icon,
      name,
      price,
      unit,
      category,
      creator,
    })
    .then(
      setName(""),
      setPrice(""),
      setUnit(""),
      setCategory("Vegetable"),
      setCreator(""),
      history.push("/read")
    )
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

//UPDATE PRODUCT
export const updateProduct =
  () =>
  (
    e,
    setLoading,
    id,
    icon,
    name,
    price,
    unit,
    category,
    oldCreator,
    history
  ) => {
    e.preventDefault();
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user.uid !== oldCreator) {
        let error = "you cant edit this product";
        return error;
      } else {
        firebase.firestore().collection("products").doc(`${id}`).update(
          {
            icon,
            name,
            price,
            unit,
            category,
          },
          setLoading(false)
        );
      }
    });
    history.push("/read");
  };

//DELETE PRODUCT
export const deleteProducts = (id) => {
  firebase
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
  if (firebase.auth().currentUser) {
    await firebase
      .firestore()
      .collection("/products")
      .where("creator", "==", firebase.auth().currentUser.uid)
      .get()
      .then((querySnapshot) => {
        const prodcutsWithID = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(prodcutsWithID);
      });
  }
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
          history.push("/read");
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
  history,
  displayName
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
          res.user.updateProfile({ displayName: displayName });
        })
        .then((res) => {
          console.log(res);
          history.push("/read");
          if (res.user) Auth.setLoggedIn(true);
          window.scrollTo(0, 0);
        })
        .catch((e) => {
          setErrors(e.message);
          console.log({ error });
        });
    });
};


