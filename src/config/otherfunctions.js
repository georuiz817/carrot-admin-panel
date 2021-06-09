//export const categoryChecker = () => {
  //if (category) return x.filter((i) => i.category === category);
//};

export const sortChecker = (filteredCategory, sortByLow) => {
  return sortByLow === "true"
    ? filteredCategory.sort(function (a, b) {
        return a.price - b.price;
      })
    : filteredCategory.sort(function (a, b) {
        return b.price - a.price;
      });
};

export const categoryFilter = (category) => {
  if (category) sortChecker.filter((i) => i.category === category);
};

//PERSISTING PRICE FILTERING TO LOCAL STORAGE
//since local storage can't accept booleans we are just using a true/false string
export const checkForLow = (setSortByLow) => {
  let localLow = localStorage.getItem("LocalLow");
  localLow ? setSortByLow(JSON.parse(localLow)) : setSortByLow("true");
};

export const handleLogOut = (history) => {
  history.push("/");
  sessionStorage.clear();
};
