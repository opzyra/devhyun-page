export const capitalization = (str) => {
  const first = str.substring(0, 1).toUpperCase();
  return first + str.substring(1, str.length);
};

export const breakParsing = (value) => {
  if (!value) return "";
  return value.replace(/(\n|\r\n)/g, "<br>");
};
