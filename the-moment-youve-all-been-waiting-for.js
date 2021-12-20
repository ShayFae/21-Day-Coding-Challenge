const switchSpecificToggle = (toggleList, specificToggle) => {
  for(const on of toggleList) {
    if(on.name === specificToggle) {
      on.isOn = !on.isOn;
    }
  }
  return toggleList;
};
