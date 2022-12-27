const mathOperations = {
    sum: function (a, b) {
      return a + b;
    },
    diff: function (a, b) {
      return a - b;
    },
    mul: function (a, b) {
      return a * b;
    },
    div: function (a, b) {
      return a / b;
    },
  };
  
  module.exports = {
    sum: mathOperations.sum,
    mul: mathOperations.mul,
    diff: mathOperations.diff,
    div: mathOperations.div,
  };
  
  console.log(mathOperations.sum(4,5))