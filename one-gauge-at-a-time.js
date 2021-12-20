const checkAllGauges = (gaugeList) => {
  for(const i of gaugeList) {
    if(i.current > i.min && i.current < i.max) { 
    }  else {
    return false;
    }
  }
  return true;
};
