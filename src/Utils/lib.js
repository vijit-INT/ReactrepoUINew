export const isValidMobileNUmber = (phoneNo) => {
  const regex = new RegExp(/^[6-9]\d{9}$/);
  return regex.test(phoneNo);
};
export const isNUmbeStringOnly = (text) => {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(text);
};
