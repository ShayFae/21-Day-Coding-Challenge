const switchAllTogglesOn = (toggleList) => {
  for(const on of toggleList) {
    if(on.isOn === false) {
      on.isOn = true;
    }
  }
  return toggleList;
};
