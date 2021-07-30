//price filtering
const sortPriceAscending = (arr) =>
  arr.sort(function (a, b) {
    return a.price - b.price;
  });

const sortPriceDescending = (arr) =>
  arr.sort(function (a, b) {
    return b.price - a.price;
  });

export const sortChecker = (arr, sortByLow) => {
  return sortByLow === "true"
    ? sortPriceAscending(arr)
    : sortPriceDescending(arr);
};


//Category and search filtering
const strFilter = (arr, str) => arr.filter((i) => i.str === str);

export const categoryFilter = (x) => {
  if (x) strFilter(sortChecker, x);
};

export const filterInput = (arr, x) =>
  arr.filter((i) => i.name.indexOf(x) !== -1);

export const checkForLow = (setSortByLow) => {
  let localLow = localStorage.getItem("LocalLow");
  localLow ? setSortByLow(JSON.parse(localLow)) : setSortByLow("true");
};

const showAllProducts = (searchArray, search, sortByLow, mediaCard) =>
  sortChecker(filterInput(searchArray, search), sortByLow).map((i) =>
    mediaCard(i)
  );

const showProductByCategory = (
  category,
  searchArray,
  search,
  sortByLow,
  mediaCard
) =>
  sortChecker(filterInput(searchArray, search), sortByLow)
    .filter((i) => i.category === category)
    .map((i) => mediaCard(i));

const showProducts = (category, searchArray, search, sortByLow, mediaCard) => {
  return !category
    ? showAllProducts(searchArray, search, sortByLow, mediaCard)
    : showProductByCategory(
      category,
      searchArray,
      search,
      sortByLow,
      mediaCard
    );
};
//

export const checkIfAvaiable = (
  x,
  category,
  searchArray,
  search,
  sortByLow,
  mediaCard
) =>
  x.length > 0 ? (
    showProducts(category, searchArray, search, sortByLow, mediaCard)
  ) : (
    <h2>You currently have no products</h2>
  );

export const handleLogOut = (history) => {
  history.push("/");
  sessionStorage.clear();
};
