const clear = (key) => localStorage.removeItem(key);
const load = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) ?? defaultValue;
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

module.exports = {
  clear,
  save,
  load,
};
