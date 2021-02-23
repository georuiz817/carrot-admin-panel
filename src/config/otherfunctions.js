//SORT PRODCUT BY PRICE
//if sortbyLow is true return array in order by prices in ascending value 
//if false return  arry in order by prices in decending value
export const sortChecker = (filteredCategory, sortByLow) => {
  if (sortByLow === "true") {
    return filteredCategory.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortByLow === "false") {
    return filteredCategory.sort(function (a, b) {
      return b.price - a.price;
    });
  } else {
    return null;
  }
};

//SORT PRODCUT BY CATEGORY
//filter through array with all products and return only the products with category equal to our selected category
export const categoryFilter = (filteredCategory, sortedCategory) => {
  filteredCategory.filter((i) => i.category === sortedCategory);
};

//PERSISTING PRICE FILTERING TO LOCAL STORAGE
//since local storage can't accept booleans we are just using a true/false string
export const checkForLow = (setSortByLow) => {
  let localLow = localStorage.getItem("LocalLow");
  if (localLow) {
    setSortByLow(JSON.parse(localLow));
  } else {
    setSortByLow("true");
  }
};

//LOGOUT
//pushing back to homepage and clearing our login session info
export const handleLogOut = (history) => {
  history.push("/");
  sessionStorage.clear();
};
