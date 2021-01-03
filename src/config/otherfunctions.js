//SORT PRODCUT BY PRICE
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
export const categoryFilter = (filteredCategory, sortedCategory) => {
  filteredCategory.filter((i) => i.category === sortedCategory);
};

//PERSISTING PRICE FILTERING TO LOCAL STORAGE
export const checkForLow = (setSortByLow) => {
  let localLow = localStorage.getItem("LocalLow");
  if (localLow) {
    setSortByLow(JSON.parse(localLow));
  } else {
    setSortByLow("true");
  }
};

//LOGOUT
export const handleLogOut = (history) => {
  history.push("/");
  sessionStorage.clear();
};
