const clear = (key) => localStorage.removeItem(key);
const load = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) ?? defaultValue;
const save = (key, value, replacer = null) => {
  const stringified = JSON.stringify(value, replacer);
  localStorage.setItem(key, stringified);
};

module.exports = {
  clear,
  save,
  load,
};
