const getAverageSpeed = (firstPosition, secondPosition) => {
  let test = (secondPosition.altitude - firstPosition.altitude ) / (secondPosition.time - firstPosition.time);
  let x = test.toFixed(1);
  return Number(x);
};
