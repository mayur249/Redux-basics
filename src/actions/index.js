export const increment = (incr) => {
  return {
    type: "INCREMENT",
    payload: incr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const signin = () => {
  return {
    type: "SIGN_IN",
  };
};
