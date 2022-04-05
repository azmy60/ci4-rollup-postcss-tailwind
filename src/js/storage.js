export const clear = (key) => localStorage.removeItem(key);

export const load = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) ?? defaultValue;

export const save = (key, value, replacer = null) => localStorage
  .setItem(key, JSON.stringify(value, replacer));
