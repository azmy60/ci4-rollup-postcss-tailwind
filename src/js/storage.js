export const clear = (key) => localStorage.removeItem(key);

export const load = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) ?? defaultValue;

export const save = (key, value, replacer = null) => {
  const stringified = JSON.stringify(value, replacer);
  localStorage.setItem(key, stringified);
};
