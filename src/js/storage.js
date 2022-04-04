const load = (key) => JSON.parse(localStorage.getItem(key));
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

module.exports = {
  save,
  load,
};
