let config = {
  method: 'get',
  headers: {
    "Accept": "application/json",
    "Content-Type": 'application/json'
  }
};

let fetchRequest = (url, config=config) => {
  return fetch(url, config);
}
