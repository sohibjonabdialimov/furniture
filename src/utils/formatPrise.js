export const formatPrice = (price) => {
  if (!price) return;
  let priceNum = typeof price !== "string" ? String(price) : price;
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
export const formatDate = (date) => {
  const dateBack = date ? new Date(date) : new Date();
  return dateBack.toISOString().substring(0, 10);
};
