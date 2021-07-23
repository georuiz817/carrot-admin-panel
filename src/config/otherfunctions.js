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

export const handleLogOut = (history) => {
  history.push("/");
  sessionStorage.clear();
};
