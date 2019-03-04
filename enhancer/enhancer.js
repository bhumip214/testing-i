const success = item => {};

const fail = item => {};

const repair = item => {
  return {
    ...item,
    durability: 100
  };
};

module.exports = {
  success,
  fail,
  repair
};
