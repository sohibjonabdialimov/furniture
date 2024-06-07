export const formatImage = (url) => {
  if (!url) return;
  const arr = url.split("");
  arr.splice(19, 1, "0");
  return arr.join("");
};
