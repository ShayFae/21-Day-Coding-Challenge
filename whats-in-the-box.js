const checkGaugeStatus = (gauge) => {
  let mins = gauge.min;
  const maxs = gauge.max
  if(gauge.current > mins && gauge.current < maxs) {
    return true
  } else {
    return false
  }
};
