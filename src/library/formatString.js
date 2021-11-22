const startUppercase = (str) => {
  const first = str.substring(0, 1).toUpperCase();
  return first + str.substring(1, str.length);
};

const exported = {
  startUppercase,
};

export default exported;
