const bookFreePlatform = (platformList, missionDate) => {
  for(let setDate in platformList) {
    if(platformList[setDate].bookDate === undefined) {
      platformList[setDate].bookDate = missionDate;
      return platformList;
    }
  }
};
