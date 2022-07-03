const formatPrice = amount => {
  try {
    let i = parseInt((amount = Math.abs(Number(amount) || 0))).toString();

    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      (j ? i.substring(0, j) + ',' : '') +
      i.substring(j).replace(/(\d{3})(?=\d)/g, '$1' + ',')
    );
  } catch (e) {
    console.log(e);
  }
};
export default formatPrice;
