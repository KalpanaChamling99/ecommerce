export const getFormattedOrderedProducts = (products) => {
  return products.map(
    ({ id: product_id, item_name: product_title, ...rest }) => ({
      product_id,
      product_title,
      ...rest,
    })
  );
};
